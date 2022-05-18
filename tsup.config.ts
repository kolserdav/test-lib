import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/Component.jsx"],
  splitting: false,
  sourcemap: true,
  clean: true,
  loader: { ".js": "jsx" },
  outDir: "src/dist",
});
