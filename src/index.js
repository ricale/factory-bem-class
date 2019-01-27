const withModifier = (base, modifier) =>
  modifier ? `${base}--${modifier}` : base;

const getBase = (block, element) =>
  element ? `${block}__${element}` : block;

const getWithModifiers = (base, modifiers) => {
  if(Array.isArray(modifiers)) {
    return modifiers.map(m => withModifier(base, m)).join(' ')
  } else {
    return withModifier(base, modifiers);
  }
};

const getClassName = (block, element, modifiers) =>
  getWithModifiers(
    getBase(block, element),
    modifiers
  );

const factoryBemClass = block => (element, modifiers) => {
  if(!!element && typeof element === typeof {}) {
    return getClassName(
      block,
      element.element,
      element.modifier || element.modifiers
    );

  } else {
    return getClassName(block, element, modifiers);
  }
};

export default factoryBemClass;
