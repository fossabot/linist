// #region Enable strict mode

"use strict";

// #endregion

// #region Initialize private store

const _ = new WeakMap();

// #endregion

// #region Create Linist class

class Linist {


  // Create constructor function to generate empty Linist
  constructor() {

    // Save new instance to private store
    _.set(this, {

      // Set private head node to undefined
      _head: undefined,

      // Set private tail node to undefined
      _tail: undefined,

      // Set private length node to 0
      _length: 0

    });

    // Disable extending Linist instance
    Object.preventExtensions(this);

  }


}

// #endregion

// #region Export Linist class

export default Linist;

// #endregion
