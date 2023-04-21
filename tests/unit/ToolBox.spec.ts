import { shallowMount } from "@vue/test-utils";
import ToolBox from "@/components/common/ToolBox.vue";

describe("ToolBox.vue", () => {
  it("renders content", () => {
    const wrapper = shallowMount(ToolBox, {
      slots: {
        default: "content",
      },
    });
    expect(wrapper.text()).toMatch("content");
  });
});
