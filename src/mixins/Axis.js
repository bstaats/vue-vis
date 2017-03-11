// Ported from Bostock's https://github.com/d3/d3-axis

import * as d3 from 'd3-format';
import { scaleBand, scaleLinear } from 'd3-scale';

const TOP = 'TOP';
const RIGHT = 'RIGHT';
const BOTTOM = 'BOTTOM';
const LEFT = 'LEFT';

const props = {
  orient:        { type: String, default: BOTTOM },
  tickSizeInner: { type: Number, default: 6 },
  tickSizeOuter: { type: Number, default: 6 },
  tickPadding:   { type: Number, default: 3 },
  tickFormat:    { type: String, default: null },
  tickArguments: { type: Array,  default: () => [] },
  axisClass:     { type: String, default: '' },
  dataKey:       { type: String, default: 'value' },
  type:          { type: String, default: 'linear' },
  padding:       { type: Number, default: 0 },
  tickValues:    { type: Array,  default: null }
};

const Axis = {
  name: 'Axis',
  props,
  data() {
    return {
      range: [0, 1],
      domain: [0, 1]
    }
  },
  computed: {
    values: function() {
      return this.tickValues == null ? (this.scale.ticks ? this.scale.ticks.apply(this.scale, this.tickArguments) : this.scale.domain()) : this.tickValues; // this.scale.ticks(this.tickCount);
    },
    scale: function() {
      // TODO: This should figure out all the scale parameters for x and y
      let scaleType = scaleLinear;
      switch (this.type) {
        case 'band':
          scaleType = scaleBand().padding(this.padding);
          break;
        default:
          scaleType = scaleLinear();
      }
      return scaleType.rangeRound(this.range).domain(this.domain);
    },
    k: function () {
      return this.orient === TOP || this.orient === LEFT ? -1 : 1;
    },
    dy: function() {
      return this.orient === TOP ? '0em' : this.orient === BOTTOM ? '0.71em' : '0.32em';
    },
    path: function() {
      const range0 = this.range[0] + 0.5;
      const range1 = this.range[this.range.length - 1] + 0.5;

      return this.orient === LEFT || this.orient === RIGHT
        ? `M${this.k * this.tickSizeOuter},${range0}H0.5V${range1}H${this.k * this.tickSizeOuter}`
        : `M${range0},${this.k * this.tickSizeOuter}V0.5H${range1}V${this.k * this.tickSizeOuter}`
    },
    textAnchor: function() {
      return this.orient === RIGHT ? 'start' : this.orient === LEFT ? 'end' : 'middle';
    },
    translate: function() {
      return this.orient === TOP || this.orient === BOTTOM ? this.translateX : this.translateY;
    }
  },
  methods: {
    textFormat: function(d) {
      return this.tickFormat == null ? (this.scale.tickFormat ? this.scale.tickFormat.apply(this.scale, this.tickArguments) : d) : d3.format(this.tickFormat)(d);
    },
    translateX: function(x) {
      return 'translate(' + x + ',0)';
    },
    translateY: function(y) {
      return 'translate(0,' + y + ')';
    },
    transform(value) {
      return this.translate(this.position()(value));
    },
    position: function() {
      return (this.scale.bandwidth ? this.center : function(x) { return x; })(this.scale.copy());
    },
    center: function(scale) {
      var offset = scale.bandwidth() / 2;
      if (scale.round()) offset = Math.round(offset);
      return function(d) {
        return scale(d) + offset;
      };
    }
  }
}

export default Axis;
export { Axis, TOP, BOTTOM, LEFT, RIGHT };
