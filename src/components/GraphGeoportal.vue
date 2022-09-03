<template>
    <div class="row row-cols-1 align-items-center justify-content-between">
        <Bar
            :class="idEx === false ? 'col-lg-9' : 'col-lg-12'"
            :chart-options="this.graph.chartOptions"
            :chart-data="this.graph.chartData"
            :height="heightGraph"
        />
        <div v-if="idEx === false" class="container col-lg-3">
            <div class="row row-cols-1 justify-content-center align-items-center">
                <div class="mb-1">
                    Название графика:
                </div>
                <div class="row row-cols-1 justify-content-center col-12 mb-1">
                    <input placeholder="Введите название графика" v-model="this.selectedTitle">
                </div>
                <div class="row row-cols-2 mt-1">
                    <div class="col pe-0 ps-0">Отображать с:</div>
                        <select class="col-6" @change="sliceLabelsGraph()" v-model="selectedFirstDate">
                            <option disabled value="">Выберите дату</option>
                            <option v-for="dat in labelsGraph" :value="dat" :key="dat">{{dat}}</option>
                        </select>
                    <div class="col mt-1">по:</div>
                        <select class="col-6 mt-1" @change="sliceLabelsGraph()" v-model="selectedEndDate">
                            <option disabled value="">Выберите дату</option>
                            <option v-for="dat in labelsGraph" :value="dat" :key="dat">{{dat}}</option>
                        </select>
                </div>
                <div class="row col-8 align-self-end mt-3">
                    <button @click="addGraph()" class="p-2 btn btn-outline-primary">Добавить график</button>
                </div>
                <div class="row col-8 align-self-end mt-3">
                    <button @click="generationId()" class="p-2 btn btn-outline-primary">Сохранить график</button>
                </div>
            </div>
        </div>



        <div v-if="idEx === false" class="container row pe-0 ps-0 justify-content-center">
            <div v-for="n in countGraph" :key="n-1" class="row justify-content-center align-items-center col-12 col-sm-6 col-md-4 col-lg-3 border rounded ms-3 mt-1 pe-1 ps-1">
                <div class="mb-1 pt-2">
                    Цвет графика №{{n}}:<br> rgb({{selectedColor[n-1].red}},{{selectedColor[n-1].green}},{{selectedColor[n-1].blue}})
                </div>
                <div class="row row-cols-2 justify-content-center col-12">
                    <div class="col-1 p-1 mb-1" style="background-color: red"></div>
                    <input class="col-11 mb-1 pe-0 ps-0" type="range" min="0" max="255" step="1" v-model="this.selectedColor[n-1].red" :oninput="changeColor(n-1)"/>
                    <div class="col-1 p-1 mb-1" style="background-color: green"></div>
                    <input class="col-11 mb-1 pe-0 ps-0" type="range" min="0" max="255" step="1" v-model="this.selectedColor[n-1].green" :oninput="changeColor(n-1)"/>
                    <div class="col-1 p-1 mb-1" style="background-color: blue"></div>
                    <input class="col-11 mb-1 pe-0 ps-0" type="range" min="0" max="255" step="1" v-model="this.selectedColor[n-1].blue" :oninput="changeColor(n-1)"/>
                </div>
                <select class="col-12 mt-1" @change="redrawGraph(n-1); changeId()" v-model="selectedTer[n-1]">
                    <option disabled :value='{ "data":"" }'>Выберите территорию</option>
                    <option v-for="ter in arrTer" :key="ter.id" :value="ter">{{ter.name}}</option>
                </select>
                <div class="row col-10 justify-content-center pe-0 ps-0 mt-1">
                    <div class="row col-12 justify-content-center"><span class="col-12">Вертикальные данные:</span></div>
                    <div class="row col-10 mt-1 pb-2">
                        <select @change="redrawGraph(n-1); changeId()" v-model="selectedMean[n-1].data">
                            <option disabled :value='""'>Выберите параметр</option>
                            <option value="t">Температура</option>
                            <option value="po">Давление</option>
                        </select>
                    </div>
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
            countGraph: 1,
            selectedFirstDate: '', //Первая дата графика
            selectedEndDate: '', //Последняя дата графика
            selectedTitle: '', //Название графика
            standartColor: { // Стандартный цвет графика
                red: '13',
                green: '110',
                blue: '253'
            },
            selectedColor: [{
                red: '',
                green: '',
                blue: ''
            }], //Выбранный цвет графика
            idPage: '', //id Графика
            idEx: undefined, //Существует ли id графика
            selectedMean: [{
                data: ''
            }], //Вертикальная шкала графика
            selectedTer: [{
                data: ''
            }], //Выбранная территория
            arrTer: [], //Массив территорий
            iDisplayLength: 3061, //кол-во запрашиваемых строк
            baseURL: 'http://cris.icc.ru/dataset/list?f=1875&count_rows=true&iDisplayStart=0', //Базовая ссылка (разбить)
            heightGraph: 200, //Высота графика (в пикселях)
            labelsGraph: [], //массив дат для графика
            dataGraph: [[]], //массив данных для графика
            graph: { //Настройки графика
                chartData: { //Данные графика
                    labels: [], //Горизонтальные подписи
                    datasets: [ 
                        {
                            label: '', //Название графика
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
        changeId() { //Сбрасывает id при изменении графика
            this.URLforSave = false;
        },
        redrawGraph(index) { //Функция для перерисовки графика
            let chartlabel = '';
            const arrData = this.selectedTer[index].data; //Берём данные выбранной территории
            const chartDataLabel = []; //Массив для времени
            const chartDataDatasets = []; //Массив для данных
            arrData.sort((prev, next) => { //Сортируем массив по дате
                if (prev.w_date < next.w_date) return -1;
                if (prev.w_date > next.w_date) return 1;
            });
            arrData.map(Ter => { //Заполняем массивы данными
                if ((Ter.w_date !== null)) { //Если существует дата
                    if ((this.selectedMean[index].data === 't') && (Ter.t !== null)) { //Если выбран график по температуре
                        chartlabel = this.selectedMean[index].data + ' ' + Ter.wmoid.name;
                        chartDataLabel.push(Ter.w_date);
                        chartDataDatasets.push(Ter.t);
                        return;
                    };
                    if ((this.selectedMean[index].data === 'po') && (Ter.po !== null)) { //Если выбран график по давлению
                        chartlabel = this.selectedMean[index].data + ' ' + Ter.wmoid.name;
                        chartDataLabel.push(Ter.w_date);
                        chartDataDatasets.push(Ter.po);
                        return;
                    };
                    
                };
            });
            this.graph.chartData.datasets[index].label = chartlabel; //Присваеваем данные графику 
            this.labelsGraph = chartDataLabel;
            //this.graph.chartData.labels = chartDataLabel; Убрано, чтобы график не загружался сразу после выбора территории
            this.dataGraph[index] = chartDataDatasets;
            //this.graph.chartData.datasets[0].data = chartDataDatasets;
            this.sliceLabelsGraph() //Обрезка данных по условию
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
            if ((windowData.id) && (windowData.id !== '')) { //Если в ссылке указан параметр id и он не пустой
                this.idPage = windowData.id;

                const dataBase = require('@/db/db.json').dataBase; //Тут должно быть подключение к БД (временно читает данные из json)

                const Ter = dataBase.find(el => el.id == this.idPage); //Проверяем есть ли такой id в БД
                if (Ter !== undefined) {
                    this.graph = Ter.dataGraph; //Записываем данные графика
                } else {
                    this.idEx = null; //Если нет id в бд
                }
            } else {
                await this.getDataAPI(); //Запрашиваем апи
                this.selectedColor[0] = JSON.parse(JSON.stringify(this.standartColor)); // Стандартный цвет для графика

                this.idEx = false;
            }
        },
        generationId() { //Создаёт id графика
            const saveObj = {}; //Объект для отправки
            const saveId = `${this.selectedTer[0].id}${this.selectedMean[0].data}${Date.now()}`; //id (id местности)(данные)(дата)
            const saveDataGraph = this.graph; //Данные графика
            saveObj.id = saveId;
            saveObj.dataGraph = saveDataGraph;
            this.URLforSave = `${window.location.origin}/?id=${saveId}`; //Сохраняем ссылку для показа

            console.log(JSON.stringify(saveObj)); //Отправка этого объекта в БД
        },
        changeColor(index) { //Изменяет цвет графика
            this.graph.chartData.datasets[index].backgroundColor = `rgb(${this.selectedColor[index].red},${this.selectedColor[index].green},${this.selectedColor[index].blue}`;
        },
        changeLabel() { //Изменяет название графика
            this.graph.chartOptions.plugins.title.text = this.selectedTitle;
        },
        sliceLabelsGraph() { //Обрезает график по нужной дате
            if ((this.selectedFirstDate !== '') && (this.selectedEndDate !== '')) {
                const FirstIndex = this.labelsGraph.indexOf(this.selectedFirstDate);
                const EndIndex = this.labelsGraph.indexOf(this.selectedEndDate);
                this.graph.chartData.labels = this.labelsGraph.slice(FirstIndex, EndIndex+1);
                this.dataGraph.forEach((el, index) => this.graph.chartData.datasets[index].data = el.slice(FirstIndex, EndIndex+1));
            }
        },
        addGraph() {
            this.selectedColor[this.countGraph] = JSON.parse(JSON.stringify(this.standartColor));
            this.selectedMean.push({data: ""});
            this.selectedTer.push({data: ""});
            this.dataGraph[this.countGraph] = [];
            this.graph.chartData.datasets.push({label: '', data: [], backgroundColor: ''});
            this.countGraph++;
        }
    },
    created() {
        this.createFirstGraph() //Создание первого графика
    },
    watch: {
        selectedTitle: function() { //Отслеживание изменения названия
            this.graph.chartOptions.plugins.title.text = this.selectedTitle;
        }
    }
}
</script>

<style scoped>

</style>