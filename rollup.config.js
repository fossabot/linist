import uglify from "rollup-plugin-uglify";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import {
  minify
} from "uglify-es";

export default [{
  input: "src/Linist.js",
  output: [{
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
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
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
    })
  ]
}, {
  input: "src/Linist.js",
  output: [{
      file: "dist/Linist.min.js",
      format: "umd",
      name: "Linist",
      sourcemap: true
    }, {
      file: "dist/Linist.min.mjs",
      format: "es",
      name: "Linist",
      sourcemap: true
    },
    {
      file: "dist/Linist.esm.min.js",
      format: "es",
      name: "Linist",
      sourcemap: true
    }
  ],
  plugins: [
    uglify({
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
    }, minify),
    resolve(),
    commonjs(),
    babel({
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
    })
  ]
}];
