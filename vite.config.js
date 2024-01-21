import { viteSingleFile } from "vite-plugin-singlefile";

/** @type {import('vite').UserConfig} */
export default {
  // config options
  build: { outDir: "docs" },
  plugins: [viteSingleFile()],
};
