<!-- Replicating the Bar chart from Bostock's https://bl.ocks.org/mbostock/3885304 -->

<template>
  <SvgContainer :width="960" :height="500" :responsive="true">
    <BarChart :width="960" :height="500"
              :margin="{top: 20, right: 20, bottom: 30, left: 40}"
              :data="data">

        <!--  TODO: see if there is a better way to do the XAxis transform -->
        <XAxis dataKey="name" type="band" :padding="0.1" :transform="`translate(0,`+450+`)`"></XAxis>
        <YAxis dataKey="value" tickFormat=".0%" ></YAxis>

    </BarChart>
  </SvgContainer>
</template>

<script>
import SvgContainer from '@/components/SvgContainer';
import BarChart from '@/components/BarChart';
import XAxis from '@/components/XAxis';
import YAxis from '@/components/YAxis';

export default {
  name: 'app',
  components: {
    SvgContainer, BarChart, XAxis, YAxis
  },
  data() {
    return {
      data: []
    }
  },
  mounted() {
    this.data = [
    {name: 'A', value: 0.08167},
    {name: 'B', value: 0.01492},
    {name: 'C', value: 0.02782},
    {name: 'D', value: 0.04253},
    {name: 'E', value: 0.12702},
    {name: 'F', value: 0.02288},
    {name: 'G', value: 0.02015},
    {name: 'H', value: 0.06094},
    {name: 'I', value: 0.06966},
    {name: 'J', value: 0.00153},
    {name: 'K', value: 0.00772},
    {name: 'L', value: 0.04025},
    {name: 'M', value: 0.02406},
    {name: 'N', value: 0.06749},
    {name: 'O', value: 0.07507},
    {name: 'P', value: 0.01929},
    {name: 'Q', value: 0.00095},
    {name: 'R', value: 0.05987},
    {name: 'S', value: 0.06327},
    {name: 'T', value: 0.09056},
    {name: 'U', value: 0.02758},
    {name: 'V', value: 0.00978},
    {name: 'W', value: 0.02360},
    {name: 'X', value: 0.00150},
    {name: 'Y', value: 0.01974},
    {name: 'Z', value: 0.00074}];
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
