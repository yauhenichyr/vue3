import { mount } from "@vue/test-utils";
import RadioGroup from "@/components/common/RadioGroup.vue";

const defaultProps = {
  options: [
    {
      label: "rad1",
      value: "rad1",
    },
    {
      label: "rad2",
      value: "rad2",
    },
  ],
  value: "rad1",
  title: "Radio title",
};

describe("RadioGroup.vue", () => {
  it("has buttons with proper name rendered", () => {
    const wrapper = mount(RadioGroup, {
      props: {
        ...defaultProps,
      },
    });
    const inputs = wrapper.findAll(".radio-group__input");
    expect(inputs.length).toBe(2);
    expect(inputs[0].attributes("name")).toMatch("radio-title");
  });

  it("onChange to be called by clicking", () => {
    const onChangeFn = jest.fn();

    const wrapper = mount(RadioGroup, {
      props: {
        ...defaultProps,
        onChange: onChangeFn,
      },
    });
    const input = wrapper.findAll(".radio-group__input")[1];
    input.trigger("change");

    expect(onChangeFn).toBeCalled();
  });
});
