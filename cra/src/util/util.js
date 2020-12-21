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
    if (!!modifier) {
      return `${blockName}__${element}_${modifier}`;
    } else {
      return `${blockName}__${element}`;
    }
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

export { getClassNames as default, getColorModeClassName, makeBemClassNamer };
