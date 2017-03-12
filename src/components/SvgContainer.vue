<template>
  <svg :width="innerWidth" :height="innerHeight">
    <slot></slot>
  </svg>
</template>

<script>
const props = {
  responsive: {
    type: Boolean,
    default: false
  },
  width: {
    type: Number,
    default: 500
  },
  height: {
    type: Number,
    default: 500
  }
};

export default {
  name: 'SvgContainer',
  props,
  data() {
    return {
      innerWidth: 0,
      innerHeight: 0
    }
  },
  mounted() {
    this.innerWidth = this.width;
    this.innerHeight = this.height;

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
      this.innerWidth = this.$el.parentElement.offsetWidth;

      for (const c of this.$children) {
        c.resize(this.innerWidth);
      }
    }
  }
}
</script>

<style scoped>

</style>
