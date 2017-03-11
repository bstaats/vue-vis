<!-- TODO: This is duplicated in YAxis.js except for the line and text x,y. Find a way to reuse single template for both -->
<template>
  <g class="axis axis-x" fill="none" font-size="10" font-family="sans-serif" :text-anchor="textAnchor">
  <path class="domain" stroke="#000" :d="path"></path>
    <g class="tick" v-for="v in values" :transform="transform(v)" opacity="1">
      <line stroke="#000" :y2="k * tickSizeInner" x1="0.5" x2="0.5"></line>
      <text fill="#000" :y="k * (Math.max(tickSizeInner, 0) + tickPadding)" x="0.5" :dy="dy">{{ textFormat(v) }}</text>
    </g>
  </g>
</template>

<script>
import Axis from '../mixins/Axis';

export default {
  name: 'XAxis',
  mixins: [Axis]
}
</script>

<style scoped>
.axis-x path {
  display: none;
}
</style>
