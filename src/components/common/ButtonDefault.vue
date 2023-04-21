<template>
  <button class="button-default" :class="sizeClass">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export type btnSize = "lg" | "sm";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ButtonDefault",
  props: {
    size: String as PropType<btnSize>,
  },
  computed: {
    sizeClass(): string {
      switch (this.size) {
        case "lg": {
          return "button-lg";
        }
        case "sm": {
          return "button-sm";
        }
        default: {
          return "";
        }
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button-default {
  font-size: 16px;
  color: #fff;
  background-color: #f65261;
  border-radius: 4px;
  padding: 4px 8px;
  border: none;

  &.button-lg {
    padding: 10px 16px;
    font-size: 20px;
  }

  &.button-sm {
    padding: 2px 4px;
    font-size: 12px;
  }

  &:hover {
    opacity: 0.95;
  }

  &:active {
    opacity: 0.9;
  }
}
</style>
