<template>
  <Header :isHomePage="isHomePage" />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/HeaderSection.vue";
import Footer from "@/components/FooterSection.vue";

export default defineComponent({
  components: {
    Header,
    Footer,
  },
  computed: {
    isHomePage(): boolean {
      return this.$route.path === "/";
    },
  },
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #232323;
  color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 1200px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -16px;
  margin-right: -16px;

  &.nowrap {
    flex-wrap: nowrap;
  }
  &.space-between {
    justify-content: space-between;
  }
  &.align-center {
    align-items: center;
  }
}

.col {
  padding-left: 16px;
  padding-right: 16px;
}
</style>
