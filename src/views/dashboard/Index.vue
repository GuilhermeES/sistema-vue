<template>
    <div class="container">
          <apexcharts width="500" type="donut" :options="chartOptions" :series="series"></apexcharts>
    </div>
</template>
<script>

import VueApexCharts from 'vue-apexcharts'
import { mapGetters } from 'vuex'

export default{
 components:{
    apexcharts: VueApexCharts,
 },
  data () {
    return {
        series: [],
        chartOptions: {
          labels: ['Total de usuários', 'Total de usuários ativos'],
        }
    }
  },
  computed:{
    ...mapGetters('users',[
            'totalUser',
            'userAtivo',
        ]),
  },  
        //this.series.push(this.totalUser, this.userAtivo.length)
      //          return this.series = [this.totalUser, this.userAtivo.length]

  mounted (){
    this.$store.dispatch("users/getUsers")
  },

}
</script>