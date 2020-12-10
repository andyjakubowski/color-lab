import './Inspector.scss';

function Inspector({ onColorPickerInput }) {
  const bemClass = function getClassName(element) {
    return `Inspector__${element}`;
  };
  const TINT_LABEL_TEXT = 'Tint';

  return (
    <div className={bemClass('container')}>
      <div className={bemClass('content')}>
        <div className={bemClass('tint-picker-container')}>
          <label
            htmlFor="tint-picker"
            className={bemClass('tint-picker-label')}
          >
            {TINT_LABEL_TEXT}
          </label>
          <input
            type="color"
            className={bemClass('tint-picker-input')}
            id="tint-picker"
            onInput={onColorPickerInput}
          />
        </div>
      </div>
    </div>
  );
}

export default Inspector;
