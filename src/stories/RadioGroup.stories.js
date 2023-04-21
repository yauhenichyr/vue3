import RadioGroup from "../components/common/RadioGroup.vue";

export default {
  title: "RadioGroup",
};

export const withJSX = () => ({
  render() {
    return (
      <RadioGroup
        title="Radio title"
        options={[
          { value: "val1", label: "label1" },
          { value: "val2", label: "label2" },
        ]}
      />
    );
  },
});
