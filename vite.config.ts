import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['./test/**/**.ts'],
    deps: {
      optimizer: {
        web: {
          include: ['bpmn-js-properties-panel'],
        },
      },
    },
  },
});
