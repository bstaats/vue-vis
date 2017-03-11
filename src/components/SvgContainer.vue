<template>
  <div>
    <svg :width="width" :height="height">
      <slot></slot>
    </svg>
  </div>
</template>


<script>
const props = {
  responsive: {
    type: Boolean,
    default: false
  },
  width: {
    type: Number,
    default: 250
  },
  height: {
    type: Number,
    default: 250
  },
  offsetWidth: {
    type: Number,
    default: 0
  },
  margin: {
    type: Object,
    default: () => ({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    })
  }
};

export default {
  name: 'SvgContainer',
  props,
  computed: {
    svgWidth: function() {
      return this.responsive ? this.offsetWidth : this.width - this.margin.left - this.margin.right;
    },
    svgHeight: function() {
      return this.height - this.margin.top - this.margin.bottom;
    }
  },
  mounted() {
    if (this.responsive) {
      window.addEventListener('resize', this.onResize);
      this.onResize();
    }
  },
  beforeDestroy() {
    if (this.responsive) {
      window.removeEventListener('resize', this.onResize);
    }
  },
  methods: {
    onResize() {
      this.offsetWidth = this.$el.offsetWidth;
    }
  }
}
</script>

<style scoped>

</style>
