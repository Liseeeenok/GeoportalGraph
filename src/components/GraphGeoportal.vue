<template>
    <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :height="heightGraph"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
    components: {
        Bar,
    },
    data() {
        return {
            heightGraph: 100,
            chartData: {
                labels: [ 'January', 'February', 'March' ],
                datasets: [ 
                    { 
                        data: [4, 2, 1] 
                    } 
                ]
            },
            chartOptions: {
                responsive: true,
            }
        }
    }
}
</script>

<style scoped>

</style>