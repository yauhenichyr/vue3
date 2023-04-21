<template>
  <section class="search-panel">
    <div class="container search-panel__container">
      <p class="search-panel__title">Find your movie</p>
      <div class="row align-center search-panel__input-container">
        <div class="col">
          <input
            class="search-panel__input"
            type="search"
            placeholder="Search..."
            :value="searchQueryStr"
            @input="setSearchQueryStr"
            @keyup.enter="searchMovies"
          />
        </div>
        <div class="col">
          <SearchBtn size="lg" @click.native="searchMovies">Search</SearchBtn>
        </div>
      </div>
      <SearchType
        title="Search by"
        :value="searchOption"
        :options="searchOptions"
        :on-change="setSearchOption"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import {useStore} from "vuex";
import { SearchOptions } from "@/store/types";
import RadioGroup from "@/components/common/RadioGroup.vue";
import Button from "@/components/common/ButtonDefault.vue";

export default defineComponent({
  name: "SearchPanel",
  props: {
    msg: String,
  },
  mounted() {
    this.searchMovies()
  },
  setup() {
    const store = useStore()

    return {
      searchMovies() {
        store.dispatch("searchMovies")
      },
      setSearchQueryStr: ({target}: Event) => {
        const {value} = <HTMLInputElement>target
        store.dispatch("setSearchQueryStr", value)
      },
      setSearchOption: (option: SearchOptions) => {
        store.dispatch("setSearchOption", option)
      },
      searchQueryStr: computed(() => store.state.searchQueryStr),
      searchOption: computed(() => store.state.searchOption),
    }
  },
  data() {
    return {
      searchOptions: [
        { label: "Title", value: SearchOptions.TITLE },
        { label: "Genre", value: SearchOptions.GENRE },
      ],
    };
  },
  components: {
    SearchType: RadioGroup,
    SearchBtn: Button,
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search-panel {
  padding: 20px 0;

  &__container {
    max-width: 1100px;
  }

  &__title {
    margin: 0 0 16px;
    font-size: 24px;
    text-transform: uppercase;
  }

  &__input {
    background-color: rgba($color: #000000, $alpha: 0.1);
    border: none;
    border-radius: 4px;
    padding: 10px 16px;
    font-size: 20px;
    color: #fff;

    &:focus {
      outline: none;
      background-color: rgba($color: #000000, $alpha: 0.8);
    }

    &-container {
      margin-bottom: 32px;
    }
  }
}
</style>
