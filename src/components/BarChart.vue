<template>
  <g :transform="`translate(${margin.left}, ${margin.top})`">
    <slot></slot>
    <rect v-for="d in data"
          :class="'bar bar-' + d.name"
          :x="xAxis.scale(d.name)"
          :y="yAxis.scale(d.value)"
          :width="xAxis.scale.bandwidth()"
          :height="innerHeight - yAxis.scale(d.value)"
      ></rect>
  </g>
</template>

<script>
import { max } from 'd3-array';

const props = {
  width:  { type: Number, default: 250 },
  height: { type: Number, default: 250 },
  data:   { type: Array,  default: () => [] },
  margin: { type: Object, default: () => ({ left: 0, right: 0, top: 0, bottom: 0 }) }
};

export default {
  name: 'BarChart',
  props,
  data() {
    return {
      xAxis:       null,
      yAxis:       null,
      innerHeight: 0,
      innerWidth:  0
    }
  },
  mounted() {
    this.innerWidth  = this.width - this.margin.left - this.margin.right;
    this.innerHeight = this.height - this.margin.top - this.margin.bottom;

    for (const c of this.$children) {
      if (c.$options.name === 'XAxis') {
        this.xAxis = c;
      } else if (c.$options.name === 'YAxis') {
        this.yAxis = c;
      } else {
        console.warn('Unknown child component in BarChart');
      }
    }

    this.initialize();
  },
  watch: {
    data: function dataChanged(newData, oldData) {
      this.update();
    }
  },
  methods: {
    initialize() {
      this.xAxis.range = [0, this.innerWidth];
      this.yAxis.range = [0, this.innerHeight];
    },
    update() {
      const x  = this.xAxis;
      x.domain = this.data.map(function(d) { return d[x.dataKey]; });

      const y  = this.yAxis;
      y.domain = [max(this.data, function(d) { return d[y.dataKey]; }), 0];
    },
    resize(newWidth) {
      this.innerWidth  = newWidth - this.margin.left - this.margin.right;
      this.xAxis.range = [0, this.innerWidth];
    }
  }
}
</script>

<style scoped>
  rect.bar {
    fill: steelblue;
  }
  rect.bar:hover {
    fill: brown;
  }
</style>
