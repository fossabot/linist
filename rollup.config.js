// #region Import plugins

import uglifyPlugin from "rollup-plugin-uglify";

import resolvePlugin from "rollup-plugin-node-resolve";

import commonjsPlugin from "rollup-plugin-commonjs";

import babelPlugin from "rollup-plugin-babel";

import uglifyEs from "uglify-es";

// #endregion

// #region Specify entry point

const input = "src/Linist.js";

// #endregion

// #region Specify outputs

const developmentOutput = [

  // UMD format
  {

    file: "dist/Linist.js",

    format: "umd",

    name: "Linist",

    sourcemap: true

  },

  // Michael jackson script format
  {

    file: "dist/Linist.mjs",

    format: "es",

    name: "Linist",

    sourcemap: true

  },

  // ECMAScript 6 module format
  {

    file: "dist/Linist.esm.js",

    format: "es",

    name: "Linist",

    sourcemap: true

  }

];

const productionOutput = [

  // UMD format
  {

    file: "dist/Linist.min.js",

    format: "umd",

    name: "Linist",

    sourcemap: true

  },

  // Michael jackson script format
  {

    file: "dist/Linist.min.mjs",

    format: "es",

    name: "Linist",

    sourcemap: true

  },

  // ECMAScript 6 module format
  {

    file: "dist/Linist.esm.min.js",

    format: "es",

    name: "Linist",

    sourcemap: true

  }

];

// #endregion

// #region Initialize plugins

const uglify = uglifyPlugin({

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

}, uglifyEs.minify);

const resolve = resolvePlugin();

const commonjs = commonjsPlugin();

const babel = babelPlugin({

  babelrc: false,

  presets: [

    [

      "env",

      {

        "modules": false

      }

    ]

  ],

  plugins: [

    "external-helpers"

  ],

  exclude: "node_modules/**"

});

// #endregion

// #region Export configuration

export default [

  // Non-Minified development distribution
  {

    input,

    output: developmentOutput,

    plugins: [

      resolve,

      commonjs,

      babel

    ]

  },

  // Minified production distribution
  {

    input,

    output: productionOutput,

    plugins: [

      uglify,

      resolve,

      commonjs,

      babel

    ]

  }

];

// #endregion
