import { shallowMount } from "@vue/test-utils";
import Button from "@/components/common/ButtonDefault.vue";

describe("ButtonDefault.vue", () => {
  it("has sm size class name", () => {
    const wrapper = shallowMount(Button, {
      props: {
        size: "sm",
      },
    });
    expect(wrapper.classes()).toContain("button-sm");
  });
  it("has lg size class name", () => {
    const wrapper = shallowMount(Button, {
      props: {
        size: "lg",
      },
    });
    expect(wrapper.classes()).toContain("button-lg");
  });
  it("contains text", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "text",
      },
    });
    expect(wrapper.text()).toMatch("text");
  });
});
