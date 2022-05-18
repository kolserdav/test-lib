import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/Component.jsx'],
  splitting: false,
  sourcemap: false,
  clean: true,
  loader: { '.js': 'jsx' },
  outDir: 'src/dist',
});
