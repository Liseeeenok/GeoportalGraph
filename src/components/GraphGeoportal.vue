<template>
    <div class="row row-cols-1 row-cols-lg-2 align-items-center justify-content-between">
        <Bar
            :class="idEx === false ? 'col-lg-8' : 'col-lg-12'"
            :chart-options="this.graph.chartOptions"
            :chart-data="this.graph.chartData"
            :height="heightGraph"
        />
        <div v-if="idEx === false" class="container col-lg-4">
            <div class="row row-cols-1 justify-content-center align-items-center">
                <div class="mb-1">
                    Название графика:
                </div>
                <div class="row row-cols-1 justify-content-center col-10 mb-1">
                    <input placeholder="Введите название графика" v-model="this.selectedTitle">
                </div>
                <div class="mb-1">
                    Цвет графика: rgb({{selectedColor.red}},{{selectedColor.green}},{{selectedColor.blue}})
                </div>
                <div class="row row-cols-2 justify-content-center col-10">
                    <div class="col-1 p-1 mb-1" style="background-color: red"></div>
                    <input class="col-11 mb-1" type="range" min="0" max="255" step="1" v-model="this.selectedColor.red" :oninput="changeColor()"/>
                    <div class="col-1 p-1 mb-1" style="background-color: green"></div>
                    <input class="col-11 mb-1" type="range" min="0" max="255" step="1" v-model="this.selectedColor.green" :oninput="changeColor()"/>
                    <div class="col-1 p-1 mb-1" style="background-color: blue"></div>
                    <input class="col-11 mb-1" type="range" min="0" max="255" step="1" v-model="this.selectedColor.blue" :oninput="changeColor()"/>
                </div>
                <select class="col-10 mt-3" @change="redrawGraph(); changeId()" v-model="selectedTer">
                    <option disabled value="" selected="true">Выберите один из вариантов</option>
                    <option v-for="ter in arrTer" :key="ter.id" :value="ter">{{ter.name}}</option>
                </select>
                <div class="row col-10 justify-content-between pe-0 ps-0 mt-2 ">
                    <div class="row col-7 justify-content-center"><span class="col-10">Вертикальные данные:</span></div>
                    <div class="row col-5">Горизонтальные данные:</div>
                    <div class="row col-7">
                        <select @change="redrawGraph(); changeId()" v-model="selectedMean">
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
                <div class="row col-7 align-self-end mt-3">
                    <button @click="generationId()" class="p-2 btn btn-outline-primary">Сохранить график</button>
                </div>
            </div>
        </div>
        <div v-if="idEx === null" class="col-lg-12 fs-3 text">
            Графика с таким id не существует
        </div>
        <div v-if="URLforSave" class="row align-self-end mt-3 row-cols-1 col-lg-12">
            <div>Ссылка на график: </div>
            <button class="btn btn-link mt-3">{{URLforSave}}</button>
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
            selectedTitle: '', //Название графика
            standartColor: { // Стандартный цвет графика
                red: '13',
                green: '110',
                blue: '253'
            },
            selectedColor: {
                red: '',
                green: '',
                blue: ''
            }, //Выбранный цвет графика
            idPage: '', //id Графика
            idEx: undefined, //Существует ли id графика
            selectedMean: 't', //Вертикальная шкала графика
            selectedTer: '', //Выбранная территория
            arrTer: [], //Массив территорий
            iDisplayLength: 3061, //кол-во запрашиваемых строк
            baseURL: 'http://cris.icc.ru/dataset/list?f=1875&count_rows=true&iDisplayStart=0', //Базовая ссылка (разбить)
            heightGraph: 200, //Высота графика (в пикселях)
            graph: { //Настройки графика
                chartData: { //Данные графика
                    labels: [], //Горизонтальные подписи
                    datasets: [ 
                        {
                            label: 't⁰ Температура воздуха в C⁰', //Название графика
                            data: [], //Данные по графику
                            backgroundColor: '', //Цвет графика
                        } 
                    ]
                },
                chartOptions: { //Опции графика
                    responsive: true, //Адаптивность
                    plugins: {
                        title: {
                            display: true,
                            text: '',
                            font: {
                                size: 20,
                            }
                        }
                    }
                },
            },
            URLforSave: '', //Ссылка для сохранения графика
        }
    }, 
    methods: {
        test() {
            console.log(this.selectedTitle)
        },
        changeId() { //Сбрасывает id при изменении графика
            window.history.pushState(null, document.title, `${window.location.origin}`);
            this.URLforSave = false;
        },
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
            this.graph.chartData.datasets[0].backgroundColor = `rgb(${this.selectedColor.red},${this.selectedColor.green},${this.selectedColor.blue}`;
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
            if ((windowData.id) && (windowData.id !== '')) { //Если в ссылке указан параметр id и он не пустой
                this.idPage = windowData.id;

                const dataBase = require('@/db/db.json').dataBase; //Тут должно быть подключение к БД (временно читает данные из json)

                const Ter = dataBase.find(el => el.id == this.idPage); //Проверяем есть ли такой id в БД
                if (Ter !== undefined) {
                    this.selectedMean = Ter.mean; //Заполняем данные
                    const selectID = this.arrTer.find(item => item.id == Ter.idTer);
                    this.selectedTer = selectID;
                    this.selectedColor.red = Ter.color.red;
                    this.selectedColor.green = Ter.color.green;
                    this.selectedColor.blue = Ter.color.blue;
                    this.idEx = true;
                    this.redrawGraph(); //Перерисовываем график
                } else {
                    this.idEx = null; //Если нет id в бд
                }
            } else {
                this.selectedTer = this.arrTer[0]; //Если не указан id в ссылке, строим график по первому запросу
                this.selectedColor = this.standartColor; // Стандартный цвет для графика
                this.idEx = false;
                this.redrawGraph();
            }
        },
        generationId() { //Создаёт id графика
            const saveObj = {}; //Объект для отправки
            const saveId = `${this.selectedTer.id}${this.selectedMean}${Date.now()}`; //id (id местности)(данные)(дата)
            const saveIdTer = `${this.selectedTer.id}`; //id Местности
            const saveMean = `${this.selectedMean}`; //Данные
            saveObj.id = saveId;
            saveObj.idTer = saveIdTer;
            saveObj.mean = saveMean;
            this.URLforSave = `${window.location.origin}/?id=${saveId}`; //Сохраняем ссылку для показа
            window.history.pushState(null, document.title, `${window.location.origin}/?id=${saveId}`); //Пушим ссылку в URL

            console.log(saveObj); //Отправка этого объекта в БД
        },
        changeColor() {
            this.graph.chartData.datasets[0].backgroundColor = `rgb(${this.selectedColor.red},${this.selectedColor.green},${this.selectedColor.blue}`;
        },
        changeLabel() {
            this.selectedTitle = 'Test'
            this.graph.chartOptions.plugins.title.text = this.selectedTitle;
        }
    },
    created() {
        this.createFirstGraph() //Создание первого графика
    },
    watch: {
        selectedTitle: function() {
            this.graph.chartOptions.plugins.title.text = this.selectedTitle;
        }
    }
}
</script>

<style scoped>

</style>