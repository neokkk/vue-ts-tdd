import { defineConfig } from 'vite';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
    }),
  ]
});
