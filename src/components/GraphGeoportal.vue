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
                    <option disabled value="">Выберите один из вариантов</option>
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
            selectedMean: 't',
            selectedTer: '',
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
                    responsive: true,
                },
            },
        }
    }, 
    methods: {
        test(e) {
            console.log('1 ', this.selectedMean);
        },
        redrawGraph() { //Функция для предоставления данных графику
            let chartlabel = '';
            const arrData = this.selectedTer.data; //Берём данные выбранной территории
            const chartDataLabel = []; //Массив для времени
            const chartDataDatasets = []; //Массив
            arrData.sort((prev, next) => { //Сортируем данные по дате
                if (prev.w_date < next.w_date) return -1;
                if (prev.w_date > next.w_date) return 1;
            });
            arrData.map(Ter => { //Заполняем массивы данными
                if ((Ter.w_date !== null)) {
                    if ((this.selectedMean === 't') && (Ter.t !== null)) {
                        chartlabel = 't⁰ Температура воздуха в C⁰';
                        chartDataLabel.push(Ter.w_date);
                        chartDataDatasets.push(Ter.t);
                        return;
                    };
                    if ((this.selectedMean === 'po') && (Ter.po !== null)) {
                        chartlabel = 'p Атмосферное давление на уровне станции в мм. рт. ст.';
                        chartDataLabel.push(Ter.w_date);
                        chartDataDatasets.push(Ter.po);
                        return;
                    };
                    
                };
            });
            this.graph.chartData.datasets[0].label = chartlabel;
            this.graph.chartData.labels = chartDataLabel.slice(0, 30);; //Присваеваем данные графику
            this.graph.chartData.datasets[0].data = chartDataDatasets.slice(0, 30);;
        },
        async getDataAPI() { //Получение данных с api
            try {
                const arrId = []; //Массив для сохранения id мест
                const response = await axios.get(this.baseURL + '&iDisplayLength=' + this.iDisplayLength); //Запрос
                const arrObject = response.data.aaData; //Результат
                arrObject.map(element => {
                    if (!arrId.includes(element.wmoid.id)) { //Проверка на включения местности в массиве
                        if (element.wmoid.name !== null) { //Если есть название у территории (Можно убрать, тогда будет поле с именем null)
                            const elId = element.wmoid.id;
                            const elName = element.wmoid.name;
                            const newTer = {};
                            newTer.id = elId;
                            newTer.name = elName;
                            newTer.data = [];
                            this.arrTer.push(newTer); //Добавляем новый объект в массив территорий
                            arrId.push(elId);
                        }
                    };
                    this.arrTer.map(terrain => {
                        if (terrain.id == element.wmoid.id) {
                            terrain.data.push(element); //Заполнение данных о территории
                        }
                    });
                });
                console.log(this.arrTer);
            } catch(e) {
                alert('Error: ' + e);
            }
        },
        async createFirstGraph() { //Функция для загрузки первого графика
            await this.getDataAPI();
            this.selectedTer = this.arrTer[0];
            this.redrawGraph();
        }
    },
    mounted() {
        this.createFirstGraph()
    }
}
</script>

<style scoped>

</style>