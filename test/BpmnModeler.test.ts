import App from '../src/App.vue';
import { describe, test, vi, expect } from 'vitest';
import { mount } from '@vue/test-utils';
describe('BpmnVitest', () => {
  const wrapper = mount(App);

  test('first test', () => {
    expect(true).toBe(true);
  });
});
