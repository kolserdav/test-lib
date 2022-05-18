import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/Component.tsx'],
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: 'src/dist',
  dts: true,
});
