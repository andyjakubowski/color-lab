function handleDOMContentLoaded() {
  App.init();
}

const Data = (function makeData() {
  const CONFIG = {};

  let state = {};

  const getRandomData = function getRandomData() {
    return {};
  };

  const resetData = function resetData() {};

  return {
    init() {},

    getData() {
      return { ...state };
    },

    setData(newDataObj) {
      const propNames = Object.getOwnPropertyNames(newDataObj);
      propNames.forEach((name) => {
        state[name] = newDataObj[name];
      });
    },
  };
})();

const App = (function buildApp() {
  function render() {}

  function addEventListeners() {}

  function setDomReferences() {}

  return {
    async init() {
      Data.init();
      setDomReferences();
      addEventListeners();
      render();
    },
  };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
} else {
  handleDOMContentLoaded();
}
