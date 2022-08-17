<template>
    <div class="row row-cols-1 row-cols-lg-2">
        <Bar
            class="col-lg-8"
            :chart-options="this.graph.chartOptions"
            :chart-data="this.graph.chartData"
            :height="heightGraph"
        />
        <div class="col-lg-2">
            <button @click="getDataAPI()">Give</button>
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
            arrTer: [], //Массив территорий
            iDisplayLength: 3061, //кол-во запрашиваемых строк
            baseURL: 'http://cris.icc.ru/dataset/list?f=1875&count_rows=true&unique=undefined&count_rows=1&iDisplayStart=0', //Базовая ссылка (разбить)
            heightGraph: 300, //Высота графика (в пикселях)
            graph: { //Настройки графика
                chartData: { //Данные графика
                    labels: [ 'January', 'February', 'March' ],
                    datasets: [ 
                        { 
                            data: [4, 2, 1],
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
                    })
                });
                console.log('arrTer ', this.arrTer);
            } catch(e) {
                alert('Error: ' + e);
            }
        }
    }
}
</script>

<style scoped>

</style>