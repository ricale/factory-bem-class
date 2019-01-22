const assert = require('assert');
const factoryBemClass = require('../dist/index.js');

console.log(factoryBemClass);

describe('factory-bem-class', function () {
  it('should return "block"', function () {
    const cn = factoryBemClass('block');
    assert.equal(cn(), 'block');
  });
});
