<template>
  <img :alt="alt" class="lazy-img" :class="className" ref="target" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

export default defineComponent({
  name: "LazyImg",
  props: {
    src: String,
    alt: String,
    className: String,
  },
  setup(props) {
    const target = ref(null);
    let isLoaded = false;

    useIntersectionObserver(target, ([{ isIntersecting }]) => {
      if (!isLoaded && isIntersecting) {
        isLoaded = true;
        // eslint-disable-next-line
        (target.value as any).setAttribute("src", props.src);
      }
    });

    return {
      target,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.lazy-img {
  max-width: 100%;
}
</style>
