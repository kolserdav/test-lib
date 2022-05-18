import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/Component.tsx'],
  splitting: false,
  sourcemap: false,
  clean: true,
  outDir: 'src/dist',
});
