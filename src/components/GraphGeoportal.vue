<template>
    <div class="row row-cols-1 row-cols-lg-2 align-items-center justify-content-between">
        <Bar
            class="col-lg-8"
            :chart-options="this.graph.chartOptions"
            :chart-data="this.graph.chartData"
            :height="heightGraph"
        />
        <div class="col-lg-4">
            <div class="row row-cols-1 justify-content-center align-items-center">
                <select class="col-10" @change="redrawGraph()" v-model="selectedTer">
                    <option disabled value="" selected="true">Выберите один из вариантов</option>
                    <option v-for="ter in arrTer" :key="ter.id" :value="ter">{{ter.name}}</option>
                </select>
                <div class="row col-10 justify-content-between pe-0 ps-0 mt-2 ">
                    <div class="row col-7 justify-content-center"><span class="col-10">Вертикальные данные:</span></div>
                    <div class="row col-5">Горизонтальные данные:</div>
                    <div class="row col-7">
                        <select @change="redrawGraph()" v-model="selectedMean">
                            <option disabled value="">Выберите один из вариантов</option>
                            <option value="t">Температура</option>
                            <option value="po">Давление</option>
                        </select>
                    </div>
                    <div class="row col-5">
                        <select>
                            <option disabled value="">Выберите один из вариантов</option>
                            <option value="t">Дата</option>
                        </select>
                    </div>
                </div>
                <div v-if="!idEx" class="fs-3 text">
                    Графика с таким id не существует
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
    components: {
        Bar,
    },
    data() {
        return {
            idEx: true, //Существует ли id графика
            selectedMean: 't', //Вертикальная шкала графика
            selectedTer: '', //Выбранная территория
            arrTer: [], //Массив территорий
            iDisplayLength: 3061, //кол-во запрашиваемых строк
            baseURL: 'http://cris.icc.ru/dataset/list?f=1875&count_rows=true&iDisplayStart=0', //Базовая ссылка (разбить)
            heightGraph: 300, //Высота графика (в пикселях)
            graph: { //Настройки графика
                chartData: { //Данные графика
                    labels: [], //Горизонтальные подписи
                    datasets: [ 
                        {
                            label: 't⁰ Температура воздуха в C⁰', //Название графика
                            data: [], //Данные по графику
                            backgroundColor: 'rgb(75, 192, 192)', //Цвет графика
                        } 
                    ]
                },
                chartOptions: { //Опции графика
                    responsive: true, //Адаптивность
                },
            },
        }
    }, 
    methods: {
        redrawGraph() { //Функция для перерисовки графика
            let chartlabel = '';
            const arrData = this.selectedTer.data; //Берём данные выбранной территории
            const chartDataLabel = []; //Массив для времени
            const chartDataDatasets = []; //Массив для данных
            arrData.sort((prev, next) => { //Сортируем массив по дате
                if (prev.w_date < next.w_date) return -1;
                if (prev.w_date > next.w_date) return 1;
            });
            arrData.map(Ter => { //Заполняем массивы данными
                if ((Ter.w_date !== null)) { //Если существует дата
                    if ((this.selectedMean === 't') && (Ter.t !== null)) { //Если выбран график по температуре
                        chartlabel = 't⁰ Температура воздуха в C⁰';
                        chartDataLabel.push(Ter.w_date);
                        chartDataDatasets.push(Ter.t);
                        return;
                    };
                    if ((this.selectedMean === 'po') && (Ter.po !== null)) { //Если выбран график по давлению
                        chartlabel = 'p Атмосферное давление на уровне станции в мм. рт. ст.';
                        chartDataLabel.push(Ter.w_date);
                        chartDataDatasets.push(Ter.po);
                        return;
                    };
                    
                };
            });
            this.graph.chartData.datasets[0].label = chartlabel; //Присваеваем данные графику
            this.graph.chartData.labels = chartDataLabel;
            this.graph.chartData.datasets[0].data = chartDataDatasets;
            this.idEx = true;
        },
        async getDataAPI() { //Получение данных с api
            try {
                const arrId = []; //Массив для сохранения id мест
                const response = await axios.get(this.baseURL + '&iDisplayLength=' + this.iDisplayLength); //Запрос
                const arrObject = response.data.aaData; //Результат
                arrObject.map(element => {
                    if (!arrId.includes(element.wmoid.id)) { //Проверка на включения местности в массиве
                        if (element.wmoid.name !== null) { //Если есть название у территории (Можно убрать, тогда будет поле с именем null)
                            const elId = element.wmoid.id; //Сохраняем id территории
                            const elName = element.wmoid.name; //Сохраняем название территории
                            const newTer = {};
                            newTer.id = elId;
                            newTer.name = elName;
                            newTer.data = []; //Массив для данных с этой территории
                            this.arrTer.push(newTer); //Добавляем новый объект в массив территорий
                            arrId.push(elId); //Сохраняем ид в массиве, чтобы знать что такую территорию уже добавили
                        }
                    };
                    this.arrTer.map(terrain => {
                        if (terrain.id == element.wmoid.id) {
                            terrain.data.push(element); //Заполнение данных о территории
                        }
                    });
                });
            } catch(e) {
                alert('Error: ' + e);
            }
        },
        async createFirstGraph() { //Функция для загрузки первого графика
            const windowData = Object.fromEntries(new URL(window.location).searchParams.entries()); //Считываем ссылку
            await this.getDataAPI(); //Запрашиваем апи
            if ((windowData.id)) { //Если в ссылке указан параметр id

                const dataBase = require('@/db/db.json').dataBase; //Тут должно быть подключение к БД (временно читает данные из json)

                const Ter = dataBase.find(el => el.id == windowData.id); //Проверяем есть ли такой id в БД
                if (Ter !== undefined) {
                    this.selectedMean = Ter.mean; //Заполняем данные
                    const selectID = this.arrTer.find(item => item.id == Ter.idTer);
                    this.selectedTer = selectID;
                    this.redrawGraph(); //Перерисовываем график
                } else {
                    this.idEx = false; //Если нет id в бд
                }
            } else {
                this.selectedTer = this.arrTer[0]; //Если не указан id в ссылке, строим график по первому запросу
                this.redrawGraph();
            }
        },
    },
    created() {
        this.createFirstGraph() //Создание первого графика
    }
}
</script>

<style scoped>

</style>