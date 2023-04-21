<template>
  <div class="radio-group">
    <span v-if="!!title" class="radio-group__title">{{ title }}</span>
    <span class="radio-group__container">
      <label v-for="{ value: val, label } in options" :key="val">
        <input
          class="radio-group__input"
          type="radio"
          :value="value"
          :name="nameAttr"
          :checked="value === val"
          @change="onChange(val)"
        />
        <span class="radio-group__btn">{{ label }}</span>
      </label>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export type RadioOption = { label: string; value: string };

export default defineComponent({
  name: "RadioGroup",
  props: {
    class: String,
    title: String,
    options: {
      type: Array as PropType<RadioOption[]>,
    },
    value: String,
    onChange: {
      type: Function,
      default: (data: string) => {
        console.log(data);
      },
    },
  },
  computed: {
    nameAttr() {
      return this.title?.replaceAll(" ", "-").toLowerCase();
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.radio-group {
  &__title {
    text-transform: uppercase;
    margin-right: 8px;
  }

  &__input {
    display: none;

    &:checked + .radio-group__btn {
      background-color: #f65261;
    }
  }

  &__container {
    border-radius: 4px;
    overflow: hidden;
    display: inline-flex;
    background-color: rgba($color: #000000, $alpha: 0.2);
  }

  &__btn {
    display: block;
    cursor: pointer;
    padding: 3px 6px;
    text-transform: uppercase;
    color: #fff;
  }
}
</style>
