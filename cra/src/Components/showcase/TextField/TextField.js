import './TextField.scss';
import { makeBemClassNamer } from '../../../util/util';
import { ReactComponent as ClearSvg } from './Clear.svg';
import { ReactComponent as MagnifyingGlassSvg } from './MagnifyingGlass.svg';
import { useState } from 'react';

const TextField = function TextField({
  placeholderText = 'Search',
  text = '',
}) {
  const [textValue, setTextValue] = useState(text);
  const bemBlockName = 'TextField';
  const bem = makeBemClassNamer(bemBlockName);
  const handleInput = function handleInput(e) {
    setTextValue(e.target.value);
  };
  const handleClearClick = function handleClearClick() {
    setTextValue('');
  };
  const trailingView =
    textValue.length === 0 ? null : (
      <div className={bem('trailingView')}>
        <button className={bem('clearButton')} onClick={handleClearClick}>
          <ClearSvg className={bem('clearButtonSvg')} />
        </button>
      </div>
    );

  return (
    <div className={bemBlockName}>
      <label className={bem('label')}>
        <div className={bem('leadingView')}>
          <MagnifyingGlassSvg className={bem('leadingViewSvg')} />
        </div>
        <input
          className={bem('input')}
          type="text"
          placeholder={placeholderText}
          value={textValue}
          onInput={handleInput}
        />
        {trailingView}
      </label>
    </div>
  );
};

TextField.supportedStates = ['default'];

export default TextField;
