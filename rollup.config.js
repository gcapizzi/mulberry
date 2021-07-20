import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.tsx",
  output: {
    file: "dist/renderer.js",
    format: "iife",
  },
  plugins: [nodeResolve(), commonjs(), typescript()],
};
