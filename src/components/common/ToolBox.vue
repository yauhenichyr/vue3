<template>
  <section class="tool-box">
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToolBox",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tool-box {
  padding: 20px 0;
  background-color: #555;
}
</style>
