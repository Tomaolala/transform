'use strict';
const expect = require('chai').expect;
const transformUrl =require("../dist/index.js")
console.log(transformUrl.default)
describe('ts-transformUrl function test', () => {
  it('should return C:\\\\', () => {
    const result = transformUrl.default("C:\\");
    expect(result).to.equal("C:\\\\");
  });
});