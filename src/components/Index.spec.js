import { shallowMount } from '@vue/test-utils';
import Index from './Index.vue';

describe('Index Component', () => {
  const wrapper = shallowMount(Index);
  test('dum dum dum', () => {
    expect(1 + 1).toBe(2);
    expect(wrapper.vm.usd).toBe(0);
  });
});
