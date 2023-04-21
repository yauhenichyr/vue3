import { shallowMount } from "@vue/test-utils";
import Header from "@/components/HeaderSection.vue";

describe("HeaderSection.vue", () => {
  it("renders title", () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.text()).toMatch("netflixroulette");
  });
});
