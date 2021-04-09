<template>
    <div class="container">
          <apexcharts width="500" type="donut" :options="options" :series="series"></apexcharts>
    </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'

export default{
 components:{
    apexcharts: VueApexCharts,
 },
  data () {
    return {
        options: {},
        series: [20,40],
    }
  }

}
</script>