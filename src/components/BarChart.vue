<template>
  <g :transform="`translate(${margin.left}, ${margin.top})`">
    <slot></slot>
    <rect v-for="d in data"
          :class="'bar bar-' + d.name"
          :x="scale.x(d.name)"
          :y="scale.y(d.value)"
          :width="scale.x.bandwidth()"
          :height="innerHeight - scale.y(d.value)"
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
      scale: { x: null, y: null }
    }
  },
  mounted() {
  },
  computed: {
    innerWidth: function() {
      return this.width - this.margin.left - this.margin.right;
    },
    innerHeight: function() {
      return this.height - this.margin.top - this.margin.bottom;
    }
  },
  watch: {
    data: function dataChanged(newData, oldData) {
      for (const c of this.$children) {
        if (c.$options.name === 'XAxis') {
          c.range = [0, this.innerWidth];
          c.domain = this.data.map(function(d) { return d[c.dataKey]; });
          this.scale.x = c.scale;
        } else if (c.$options.name === 'YAxis') {
          c.range = [0, this.innerHeight];
          c.domain = [max(this.data, function(d) { return d[c.dataKey]; }), 0];
          this.scale.y = c.scale;
        } else {
          console.warn('Unknown child component in BarChart');
        }
      }
    }
  },
  methods: {
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
