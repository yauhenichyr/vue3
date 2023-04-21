import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import ButtonDefault from "../components/common/ButtonDefault.vue";

export default {
  title: "ButtonDefault",
};

export const withText = () => ({
  components: { ButtonDefault },
  template: '<ButtonDefault @click="action">Hello Button</ButtonDefault>',
  methods: { action: action("clicked") },
});

export const withJSX = () => ({
  render() {
    return (
      <ButtonDefault onClick={linkTo("Button", "With Some Emoji")}>
        With JSX
      </ButtonDefault>
    );
  },
});

export const largeWithSomeEmoji = () => ({
  components: { ButtonDefault },
  template: "<ButtonDefault size='lg'>😀 😎 👍 💯</ButtonDefault>",
});
