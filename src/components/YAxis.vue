<!-- TODO: This is duplicated in XAxis.js except for the line and text x,y. Find a way to reuse single template for both -->
<template>
  <g class="axis axis-y" fill="none" font-size="10" font-family="sans-serif" :text-anchor="textAnchor">
  <path class="domain" stroke="#000" :d="path"></path>
    <g class="tick" v-for="v in values" :transform="transform(v)" opacity="1">
      <line stroke="#000" :x2="k * tickSizeInner" y1="0.5" y2="0.5"></line>
      <text fill="#000" :x="k * (Math.max(tickSizeInner, 0) + tickPadding)" y="0.5" :dy="dy">{{ textFormat(v) }}</text>
    </g>
  </g>
</template>

<script>
import { Axis, LEFT } from '../mixins/Axis';

// TODO: Not sure this is the best way to set the default to something different than the mixin
const props = {
  orient: { type: String, default: LEFT }
};

export default {
  name: 'YAxis',
  mixins: [Axis],
  props
}
</script>

<style scoped>
</style>
