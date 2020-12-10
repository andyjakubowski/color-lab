const getClassNames = function getClassNames(block, elements, modifier) {
  return elements.reduce((classNamesObject, element) => {
    return {
      ...classNamesObject,
      [element]: `${block}__${element} ${block}__${element}_${modifier}`,
    };
  }, {});
};

export default getClassNames;
