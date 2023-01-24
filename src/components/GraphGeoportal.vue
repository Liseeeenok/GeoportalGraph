<template>
    <div class="row row-cols-1 align-items-center justify-content-between">
        <Line
            :style="typeGraph == '1' ? 'display: block' : 'display: none'"
            :class="idEx === false ? 'col-lg-9' : 'col-lg-12'"
            :chart-options="this.graph.chartOptions"
            :chart-data="this.graph.chartData"
            :height="heightGraph"
        />
        <Bar
            :style="typeGraph == '2' ? 'display: block' : 'display: none'"
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
                        <select class="col-6" @change="sliceLabelsGraph(); changeId()" v-model="selectedFirstDate">
                            <option disabled value="">Выберите дату</option>
                            <option v-for="dat in arrDateGraph" :value="dat" :key="dat">{{dat}}</option>
                        </select>
                    <div class="col mt-1">по:</div>
                        <select class="col-6 mt-1" @change="sliceLabelsGraph(); changeId()" v-model="selectedEndDate">
                            <option disabled value="">Выберите дату</option>
                            <option v-for="dat in arrDateGraph" :value="dat" :key="dat">{{dat}}</option>
                        </select>
                </div>
                <div class="row col-8 align-self-end mt-3">
                    <button @click="addGraph(); changeId()" class="p-2 btn btn-outline-primary">Добавить график</button>
                </div>
                <div class="row col-8 align-self-end mt-3">
                    <button @click="generationId()" class="p-2 btn btn-outline-primary">Сохранить график</button>
                </div>
                <div class="row col-8 align-self-end mt-3">
                    <select class="col-12 mt-1" v-model="typeGraph" @change="changeId()">
                        <option disabled value="">Выберите вид графика</option>
                        <option :value="1">Линейный график</option>
                        <option :value="2">Столбчатый график</option>
                    </select>
                </div>
            </div>
        </div>



        <div v-if="idEx === false" class="container row pe-0 ps-0 justify-content-center">
            <div v-for="n in countGraph" :key="n-1" class="row justify-content-center align-items-center col-12 col-sm-6 col-md-4 col-lg-3 border rounded ms-3 mt-1 pe-1 ps-1">
                <div class="mb-1 pt-2">
                    Цвет графика №{{n}}:
                </div>
                <div class="row row-cols-2 justify-content-center col-12">
                    <input type="color" class="form-control form-control-color" v-model="selectedColor[n-1]" :change="changeColor(n-1)">
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
                            <option v-for="quality in arrQuality" :key="quality.fieldname" :value="quality.fieldname">{{quality.title}}</option>
                        </select>
                    </div>
                </div>
                <div class="row col-10 justify-content-center pe-0 ps-0 mt-1">
                    <div class="row col-12 justify-content-center"><span class="col-12">Горизонтальные данные:</span></div>
                    <div class="row col-10 mt-1 pb-2">
                        <select @change="redrawGraph(n-1); changeId()" v-model="selectedHorizontal[n-1].data">
                            <option disabled :value='""'>Выберите параметр</option>
                            <option v-for="quality in arrQuality" :key="quality.fieldname" :value="quality.fieldname">{{quality.title}}</option>
                        </select>
                    </div>
                </div>
                <div class="row col-10 justify-content-center pe-0 ps-0 mt-1">
                    <div class="row col-10 mt-1 pb-2">
                        <input placeholder="Вертикальная подпись" v-model="this.verticalTitle">
                    </div>
                </div>
                <div class="row col-10 justify-content-center pe-0 ps-0 mt-1">
                    <div class="row col-10 mt-1 pb-2">
                        <input placeholder="Горизонтальная подпись" v-model="this.gorizontalTitle">
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
import axios from 'axios';
import { Bar } from 'vue-chartjs';
import { Line } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement, Filler } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement, Filler);
export default {
    components: {
        Bar, Line,
    },
    data() {
        return {
            typeGraph: 1,
            countGraph: 1,
            selectedFirstDate: '', //Первая дата графика
            selectedEndDate: '', //Последняя дата графика
            selectedTitle: '', //Название графика
            standartColor: '#0d6efd', // Стандартный цвет графика
            selectedColor: ['#0d6efd'], //Выбранный цвет графика
            idPage: '', //id Графика
            idEx: undefined, //Существует ли id графика
            selectedMean: [{
                data: ''
            }], //Вертикальная шкала графика
            selectedHorizontal: [{
                data: ''
            }], //Горизонатльные данные графика
            selectedTer: [{
                data: ''
            }], //Выбранная территория
            arrTer: [], //Массив территорий
            iDisplayLength: 3061, //кол-во запрашиваемых строк
            baseURL: 'http://cris.icc.ru/dataset/list?f=1875&count_rows=true&iDisplayStart=0', //Базовая ссылка (разбить)
            arrQuality: [], //Массив свойств апишки
            heightGraph: 200, //Высота графика (в пикселях)
            arrDateGraph: [], //массив дат для графика
            labelsGraph: [], 
            dataGraph: [[]], //массив данных для графика
            gorizontalTitle: '', //горизонтальная подпись
            verticalTitle: '', //Вертикальная подпись
            graph: { //Настройки графика
                chartData: { //Данные графика
                    labels: [], //Горизонтальные подписи
                    datasets: [ 
                        {
                            label: '', //Название графика
                            data: [], //Данные по графику
                            fill: true,
                            borderColor: '', //Цвет графика
                            borderWidth: 1
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
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true,
                                text: '',
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: '',
                            }
                        },
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
            const chartHorizontalData = []; 
            const chartDataDatasets = []; //Массив для данных
            const chartDataLabel = []; //Массив для времени

            const selectedQuality = this.selectedMean[index].data;
            const selectedQualityHorizontal = this.selectedHorizontal[index].data;

            arrData.sort((prev, next) => { //Сортируем массив по дате
                if (prev.w_date < next.w_date) return -1;
                if (prev.w_date > next.w_date) return 1;
            });
            arrData.map(Ter => { //Заполняем массивы данными
                if ((Ter.w_date !== null)) { //Если существует дата
                    
                    if ((Ter[selectedQuality] !== null) && (Ter[selectedQualityHorizontal] !== null)) { //Если выбран график вертикальные данные
                        chartDataLabel.push(Ter.w_date);
                        chartlabel = this.selectedMean[index].data + ' ' + Ter.wmoid.name;
                        chartHorizontalData.push(Ter[selectedQualityHorizontal]);
                        chartDataDatasets.push(Ter[selectedQuality]);
                        return;
                    };
                };
            });
            this.graph.chartData.datasets[index].label = chartlabel; //Присваеваем данные графику
            if (this.gorizontalTitle == '') {
                this.gorizontalTitle = selectedQualityHorizontal;
                this.graph.chartOptions.scales.x.title.text = selectedQualityHorizontal; //Присваеваем горизонтальный лейбел
            } else this.graph.chartOptions.scales.x.title.text = this.gorizontalTitle;
            if (this.verticalTitle == '') {
                this.verticalTitle = selectedQuality;
                this.graph.chartOptions.scales.y.title.text = selectedQuality; //Присваеваем вертикальный лейбел
            } else  this.graph.chartOptions.scales.y.title.text = this.verticalTitle;
            this.labelsGraph = chartHorizontalData;
            this.arrDateGraph = chartDataLabel;
            this.dataGraph[index] = chartDataDatasets;
            this.sliceLabelsGraph() //Обрезка данных по условию
        },
        async getDataAPI() { //Получение данных с api
            try {
                const arrId = []; //Массив для сохранения id мест 
                const response2 = await axios.get('http://cris.icc.ru/dataset/list?f=100&f_id=1875'); //Запрос
                const arrObject2 = JSON.parse(response2.data.aaData[0].JSON).columns; //Свойства графиков апи
                arrObject2.forEach(el => {
                    if(el.visible) this.arrQuality.push(el); //Отсеиваем скрытые свойства
                })
                const response = await axios.get(this.baseURL + '&iDisplayLength=' + this.iDisplayLength); //Запрос
                const arrObject = response.data.aaData; //Результат
                //console.log(arrObject);
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
                    await this.getDataAPI();
                    //this.redrawGraph();
                    //this.graph = Ter.dataGraph; //Записываем данные графика
                    //console.log(Ter);
                    //console.log(this.arrTer);
                    this.selectedTer = [];
                    Ter.arrIdTer.forEach((element, index) => {
                        this.selectedTer.push(this.arrTer.find(item => item.id == element));
                    })
                    console.log(this.selectedTer);
                    this.selectedMean = Ter.selectedMean;
                    this.selectedHorizontal = Ter.selectedHorizontal;
                    this.selectedColor = Ter.selectedColor;
                    console.log(this.selectedColor);
                    console.log(Ter.selectedColor);
                    this.gorizontalTitle = Ter.gorizontalTitle;
                    this.verticalTitle = Ter.verticalTitle;
                    this.selectedFirstDate = Ter.selectedFirstDate;
                    this.selectedEndDate = Ter.selectedEndDate;
                    this.selectedTitle = Ter.selectedTitle;
                    this.typeGraph = Ter.typeGraph;
                    Ter.arrIdTer.forEach((element, index) => {
                        if (index > 0) this.addGraph();
                        this.redrawGraph(index);
                        console.log(this.selectedColor);
                        console.log(Ter.selectedColor);
                        this.changeColor(index);
                    })
                } else {
                    this.idEx = null; //Если нет id в бд
                }
            } else {
                this.idEx = false;
                this.selectedColor[0] = JSON.parse(JSON.stringify(this.standartColor)); // Стандартный цвет для графика
                await this.getDataAPI(); //Запрашиваем апи
            }
        },
        generationId() { //Создаёт id графика
            const saveObj = {}; //Объект для отправки
            const saveId = `${this.selectedTer[0].id}${this.selectedMean[0].data}${Date.now()}`; //id (id местности)(данные)(дата)
            const saveDataGraph = this.graph; //Данные графика
            let arrIdTer = [];
            this.selectedTer.forEach(element => {
                arrIdTer.push(element.id);
            })
            saveObj.id = saveId;
            saveObj.arrIdTer = arrIdTer;
            saveObj.selectedMean = this.selectedMean;
            saveObj.selectedHorizontal = this.selectedHorizontal;
            saveObj.selectedColor = this.selectedColor;
            saveObj.gorizontalTitle = this.gorizontalTitle;
            saveObj.verticalTitle = this.verticalTitle;
            saveObj.selectedFirstDate = this.selectedFirstDate;
            saveObj.selectedEndDate = this.selectedEndDate;
            saveObj.selectedTitle = this.selectedTitle;
            saveObj.typeGraph = this.typeGraph;
            //saveObj.dataGraph = saveDataGraph;
            this.URLforSave = `${window.location.origin}/?id=${saveId}`; //Сохраняем ссылку для показа


            console.log(JSON.stringify(saveObj)); //Отправка этого объекта в БД
        },
        changeColor(index) { //Изменяет цвет графика
            this.graph.chartData.datasets[index].borderColor = this.selectedColor[index];
        },
        changeLabel() { //Изменяет название графика
            this.graph.chartOptions.plugins.title.text = this.selectedTitle;
        },
        sliceLabelsGraph() { //Обрезает график по нужной дате
            if ((this.selectedFirstDate !== '') && (this.selectedEndDate !== '')) {
                const FirstIndex = this.arrDateGraph.indexOf(this.selectedFirstDate);
                const EndIndex = this.arrDateGraph.indexOf(this.selectedEndDate);
                this.graph.chartData.labels = this.labelsGraph.slice(FirstIndex, EndIndex+1);
                this.dataGraph.forEach((el, index) => this.graph.chartData.datasets[index].data = el.slice(FirstIndex, EndIndex+1));
                console.log(this.graph.chartData.labels);
                console.log(this.graph.chartData.datasets[0].data);
            }
        },
        addGraph() { //Добавление графика
            if (!this.selectedColor[this.countGraph]) {
                this.selectedColor[this.countGraph] = this.standartColor;
            }
            this.selectedMean.push({data: ""});
            this.selectedTer.push({data: ""});
            this.selectedHorizontal.push({data: ""});
            this.dataGraph[this.countGraph] = [];
            this.graph.chartData.datasets.push({fill: true, label: '', data: [], borderColor: '', borderWidth: 1});
            this.countGraph++;
        },
        changeTypeGraph(type) { //Изменение типа графика
            this.typeGraph = type;
        }
    },
    created() {
        this.createFirstGraph() //Создание первого графика
    },
    watch: {
        selectedTitle: function() { //Отслеживание изменения названия
            this.graph.chartOptions.plugins.title.text = this.selectedTitle;
            this.changeId();
        },
        gorizontalTitle: function() {
            this.graph.chartOptions.scales.x.title.text = this.gorizontalTitle;
            this.changeId();
        },
        verticalTitle: function() {
            this.graph.chartOptions.scales.y.title.text = this.verticalTitle;
            this.changeId();
        }
    }
}
</script>

<style scoped>

</style>