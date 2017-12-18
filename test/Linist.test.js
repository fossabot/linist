// #region Import libraries

import chai from "chai";

import Linist from "../src/Linist";

// #endregion

// #region Initialize assertion helpers

const expect = chai.expect;

// #endregion

// #region Describe Linist Tests

describe("Linist", () => {

  describe("new Linist()", () => {

    const newLinist = new Linist();

    it("should return a Linist", () => {

      expect(newLinist).to.be.an.instanceof(Linist);

    });

  });

});

// #endregion
