const vuePlugin = require("./rollup-plugin-vue/index");
import babel from "@rollup/plugin-babel";
// import vuePlugin from "rollup-plugin-vue";

import scss from 'rollup-plugin-scss'

const iife = {
  input: "entry.js",
  output: {
    file: "dist/index.js",
    name: "AdminCommon",
    format: "iife",
    globals: {
      vue: "Vue",
    },
  },
  external: ["vue"],
  plugins: [
    babel(),
    vuePlugin({
      css: true,
    }),
    scss(),
  ],
};

const es = {
  input: "entry.js",
  output: {
    file: "dist/index.bundle.js",
    name: "AdminCommon",
    format: "es",
    globals: {
      vue: "Vue",
    },
  },
  external: ["vue"],
  plugins: [
    babel(),
    vuePlugin({
      css: true,
    }),
    scss(),
  ],
};



import { terser } from "rollup-plugin-terser";
const minEs = {
  input: "entry.js",
  external: ["vue"],
  output: {
    file: "dist/index.min.js",
    name: "Element",
    format: "umd",
  },
  plugins: [
    babel(),
    vuePlugin({
      css: true,
    }),
    scss(),
    terser(),
  ],
};

const cjs = {
  input: "entry.js",
  external: ["vue"],
  output: {
    file: "dist/index.cjs.js",
    name: "Element",
    format: "cjs",
  },
  plugins: [
    babel(),
    vuePlugin({
      css: true,
    }),
    scss(),
  ],
};

export default [es, minEs, cjs];
