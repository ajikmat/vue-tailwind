<template>
  <div :class="currentIndex % 2 ? 'bg-slate-400' : 'bg-slate-600'">
    <div class="page-view" ref="pageView">
      <div v-for="(page, index) in pages" :key="index" class="page">
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: ['Page 1', 'Page 2', 'Page 3'],
      currentIndex: 0,
    };
  },
  mounted() {
    this.$refs.pageView.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    this.$refs.pageView.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      const scrollPosition = event.target.scrollTop;
      const pageHeight = event.target.offsetHeight;
      const currentPage = Math.round(scrollPosition / pageHeight);

      this.currentIndex = currentPage;
      console.log('Current Page:', currentPage + 1);
    },
  },
};
</script>

<style>
.page-view {
  width: 100%;
  height: calc(
    100vh - 95px
  ); /* Subtract the navbar height from viewport height */
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
}

.page-view::-webkit-scrollbar {
  width: 0;
}

.page {
  height: 100%;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}
</style>
