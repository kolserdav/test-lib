import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/Component.tsx', 'src/ui'],
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: 'src/dist',
  dts: true,
});
