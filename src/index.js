const withModifier = (base, modifier) =>
  modifier ? `${base}--${modifier}` : base;

const getBase = (block, element) =>
  element ? `${block}__${element}` : block;

const getWithModifiers = (base, modifiers) => {
  if(Array.isArray(modifiers)) {
    return `${base} ${modifiers.map(m => withModifier(base, m)).join(' ')}`;
  } else if(modifiers) {
    return `${base} ${withModifier(base, modifiers)}`;
  } else {
    return base;
  }
};

const getClassName = (block, element, modifiers) =>
  getWithModifiers(
    getBase(block, element),
    modifiers
  );

export const factoryBemClass = block => (element, modifiers) => {
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
