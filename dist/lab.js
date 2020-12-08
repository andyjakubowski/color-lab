function handleDOMContentLoaded() {
  App.init();
}

const Data = (function makeData() {
  const CONFIG = {};

  let state = {
    tint: {
      hex: null,
    },
  };

  const getRandomData = function getRandomData() {
    return {};
  };

  const resetData = function resetData() {};

  return {
    init() {
      state.tint.hex = ColorUtil.getRandomHexColor();
    },

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
  const rootEl = document.documentElement;
  let colorInputEl;

  function render(data) {
    updateColorInputEl(data.tint.hex);
    updateCSSCustomProps(data.tint.hex);
  }

  function updateColorInputEl(hexColor) {
    colorInputEl.value = hexColor;
  }

  function updateCSSCustomProps(tintHex) {
    rootEl.style.setProperty('--l-tint', tintHex);
    rootEl.style.setProperty('--d-tint', tintHex);
  }

  function handleColorInput(e) {
    Data.setData({
      tint: {
        hex: e.target.value,
      },
    });
    render(Data.getData());
  }

  function addEventListeners() {
    colorInputEl.addEventListener('input', handleColorInput);
  }

  function setDomReferences() {
    colorInputEl = document.getElementsByClassName('color-well__input').item(0);
  }

  return {
    async init() {
      Data.init();
      setDomReferences();
      addEventListeners();
      render(Data.getData());
    },
  };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
} else {
  handleDOMContentLoaded();
}
