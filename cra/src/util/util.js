const has = function has(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
};

const hasChildren = function hasChildren(reactEl) {
  if (typeof reactEl !== 'object') {
    return false;
  } else {
    return has(reactEl.props, 'children');
  }
};

const isObject = function isObject(value) {
  return typeof value === 'object';
};

const combineClassNames = function combineClassNames(
  existingClassName,
  newClassName
) {
  return existingClassName
    ? `${existingClassName} ${newClassName}`
    : newClassName;
};

const getClassNames = function getClassNames(block, elements, modifier) {
  return elements.reduce((classNamesObject, element) => {
    return {
      ...classNamesObject,
      [element]: `${block}__${element} ${block}__${element}_${modifier}`,
    };
  }, {});
};

const makeBemClassNamer = function makeBemClassNamer(blockName) {
  return function bemClassNamer(element, modifier = null) {
    const elementPart = element === null ? '' : `__${element}`;
    const modifierPart = modifier === null ? '' : `_${modifier}`;

    return `${blockName}${elementPart}${modifierPart}`;
  };
};

const getColorModeClassName = function getColorModeClassName(modeName) {
  let className;

  switch (modeName) {
    case 'Light Mode':
      className = 'colorModeLight';
      break;
    case 'Dark Mode':
      className = 'colorModeDark';
      break;
    default:
      className = '';
  }

  return className;
};

export {
  getClassNames as default,
  getColorModeClassName,
  makeBemClassNamer,
  hasChildren,
  isObject,
  combineClassNames,
  has,
};
