const appleSystemIndigo = '#5756CF';
const tint = appleSystemIndigo;
const tintInverse = 'white';

const colorModes = [
  {
    name: 'Light Mode',
    prefix: 'l',
    props: {
      '--l-tint': tint,
      '--l-tint-inverse': tintInverse,
      '--l-label': '#000',
      '--l-secondary-label': '#3c3c439a',
      '--l-tertiary-label': '#3c3c434d',
      '--l-quaternary-label': '#3c3c432e',
      '--l-fill': '#78788033',
      '--l-secondary-fill': '#78788029',
      '--l-tertiary-fill': '#7676801f',
      '--l-quaternary-fill': '#74748014',
      '--l-placeholder-text': '',
      '--l-background': '#ffffff',
      '--l-secondary-background': '#f2f2f7',
      '--l-tertiary-background': '',
      '--l-grouped-background': '#f2f2f7',
      '--l-secondary-grouped-background': '#ffffff',
      '--l-tertiary-grouped-background': '#f2f2f7',
      '--l-separator': '#3c3c435c',
      '--l-opaque-separator': '#c6c6c8',
      '--l-link': tint,
    },
  },
  {
    name: 'Dark Mode',
    prefix: 'd',
    props: {
      '--d-tint': tint,
      '--d-tint-inverse': tintInverse,
      '--d-label': '#ffffff',
      '--d-secondary-label': '#ebebf59a',
      '--d-tertiary-label': '#ebebf54d',
      '--d-quaternary-label': '#ebebf52e',
      '--d-fill': '#7878805c',
      '--d-secondary-fill': '#78788052',
      '--d-tertiary-fill': '#7676803d',
      '--d-quaternary-fill': '#7474802e',
      '--d-placeholder-text': '',
      '--d-background': '#000000',
      '--d-secondary-background': '#1c1c1e',
      '--d-tertiary-background': '#2c2c2e',
      '--d-grouped-background': '#000000',
      '--d-secondary-grouped-background': '#1c1c1e',
      '--d-tertiary-grouped-background': '#2c2c2e',
      '--d-separator': '#545458a6',
      '--d-opaque-separator': '#38383a',
      '--d-link': tint,
    },
  },
];

export default colorModes;
