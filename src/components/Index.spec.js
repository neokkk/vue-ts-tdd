import { shallowMount } from '@vue/test-utils';
import Index from './Index.vue';

describe('Index Component', () => {
  const wrapper = shallowMount(Index);

  expect(1 + 1).toBe(2);
});
