import {
  expect
} from "chai";

import Linist from "../src/Linist";

describe("Linist", () => {

  describe("Create Using constructor", () => {

    it("should return a Linist", () => {

      const newLinist = new Linist();

      expect(newLinist).to.be.an.instanceof(Linist);

    });

  });

});
