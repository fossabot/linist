"use strict";

const _ = new WeakMap();

class Linist {


  constructor() {

    _.set(this, {

      _head: null,

      _tail: null,

      _length: 0

    });

    Object.preventExtensions(this);

  }


}

export default Linist;
