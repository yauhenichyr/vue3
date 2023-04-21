import ToolBox from "../components/common/ToolBox.vue";

export default {
  title: "ToolBox",
};

export const withJSX = () => ({
  render() {
    return <ToolBox>Content</ToolBox>;
  },
});
