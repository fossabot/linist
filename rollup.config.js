import uglify from "rollup-plugin-uglify";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import {
  minify
} from "uglify-es";

const input = "src/Linist.js";

const output = [{
    file: "dist/Linist.js",
    format: "umd",
    name: "Linist",
    sourcemap: true
  }, {
    file: "dist/Linist.mjs",
    format: "es",
    name: "Linist",
    sourcemap: true
  },
  {
    file: "dist/Linist.esm.js",
    format: "es",
    name: "Linist",
    sourcemap: true
  }
];

const resolveDefault = resolve();
const commonjsDefault = commonjs();
const babelDefault = babel({
  presets: [
    [
      "es2015", {
        "modules": false
      }
    ]
  ],
  plugins: [
    "external-helpers"
  ],
  babelrc: false,
  exclude: "node_modules/**"
});
const uglifyDefault = uglify({
  "keep_classnames": true,
  "keep_fnames": true,
  "ecma": 6,
  "mangle": true,
  "compress": {
    "arrows": true,
    "sequences": true,
    "dead_code": true,
    "conditionals": true,
    "booleans": true,
    "unused": true,
    "if_return": true,
    "join_vars": true,
    "drop_console": true,
    "cascade": true,
    "comparisons": true
  }
}, minify);

export default [{
  input,
  output,
  plugins: [
    resolveDefault,
    commonjsDefault,
    babelDefault
  ]
}, {
  input,
  output,
  plugins: [
    uglifyDefault,
    resolveDefault,
    commonjsDefault,
    babelDefault
  ]
}];
