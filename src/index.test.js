const assert = require('assert');
const factoryBemClass = require('../dist/index.js').default;

const blockName = 'blockName';
const elementName = 'elementName';
const modifierNames = ['modifier1', 'modifier2'];

const test = (should, expected) =>
  it(`should return ${expected}`, () =>
    assert.equal(should, expected)
  );

describe('factory-bem-class', function () {
  describe('without parameter', function () {
    const cn = factoryBemClass(blockName);

    test(
      cn(),
      `${blockName}`
    );
  });
  describe('with string parameters', function () {
    const cn = factoryBemClass(blockName);

    test(
      cn(elementName),
      `${blockName}__${elementName}`
    );

    test(
      cn(elementName, modifierNames[0]),
      `${blockName}__${elementName}--${modifierNames[0]}`
    );

    test(
      cn(elementName, modifierNames),
      `${blockName}__${elementName}--${modifierNames[0]} ${blockName}__${elementName}--${modifierNames[1]}`
    );

    test(
      cn(null, modifierNames[0]),
      `${blockName}--${modifierNames[0]}`
    );

    test(
      cn(null, modifierNames),
      `${blockName}--${modifierNames[0]} ${blockName}--${modifierNames[1]}`
    );
  });

  describe('with hash parameter', function () {
    const cn = factoryBemClass(blockName);

    test(
      cn({element: elementName}),
      `${blockName}__${elementName}`
    );

    test(
      cn({element: elementName, modifier: modifierNames[0]}),
      `${blockName}__${elementName}--${modifierNames[0]}`
    );

    test(
      cn({element: elementName, modifiers: modifierNames}),
      `${blockName}__${elementName}--${modifierNames[0]} ${blockName}__${elementName}--${modifierNames[1]}`
    );

    test(
      cn({modifier: modifierNames[0]}),
      `${blockName}--${modifierNames[0]}`
    );

    test(
      cn({modifiers: modifierNames}),
      `${blockName}--${modifierNames[0]} ${blockName}--${modifierNames[1]}`
    );
  });
});
