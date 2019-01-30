const withModifier = (base, mod) =>
  mod ? `${base}--${mod}` : base;

const getBase = (block, element) =>
  element ? `${block}__${element}` : block;

const withModifiersUsingObject = (base, mods) => {
  const modifiers = Array.isArray(mods) ? mods : Object.keys(mods).filter(k => mods[k]);
  return modifiers.map(m => withModifier(base, m)).join(' ');
}

const withModifiers = (base, mods) => {
  if(!!mods && typeof mods === typeof {}) {
    return `${base} ${withModifiersUsingObject(base, mods)}`;

  } else if(mods) {
    return `${base} ${withModifier(base, mods)}`;

  } else {
    return base;
  }
};

const getClassName = (block, element, mods) =>
  withModifiers(
    getBase(block, element),
    mods
  );

const getClassNameUsingObject = (block, obj) => {
  const {el, mods, ...rest} = obj;

  const restKeys = Object.keys(rest);
  const modifiers = (
    restKeys.length === 0 ? mods :
    Array.isArray(mods)   ? [...mods, ...restKeys] :
                            {...mods, ...rest}
  );

  return getClassName(
    block,
    el,
    modifiers
  );
}

export const factoryBemClass = block => (element, mods) => {
  if(!!element && typeof element === typeof {}) {
    return getClassNameUsingObject(block, element);

  } else {
    return getClassName(block, element, mods);
  }
};
