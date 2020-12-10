const tint = 'tomato';
const tintInverse = 'white';
const tintDarkMode = tint;
const colorModes = [
  {
    name: 'Light Mode',
    data: {
      '--tint-inverse': tintInverse,
      '--label': '#000',
      '--secondary-label': '#3c3c439a',
      '--tertiary-label': '#3c3c434d',
      '--quaternary-label': '#3c3c432e',
      '--fill': '#78788033',
      '--secondary-fill': '#78788029',
      '--tertiary-fill': '#7676801f',
      '--quaternary-fill': '#74748014',
      '--placeholder-text': '',
      '--background': '#ffffff',
      '--secondary-background': '#f2f2f7',
      '--tertiary-background': '',
      '--grouped-background': '#f2f2f7',
      '--secondary-grouped-background': '#ffffff',
      '--tertiary-grouped-background': '#f2f2f7',
      '--separator': '#3c3c435c',
      '--opaque-separator': '#c6c6c8',
      '--link': tint,
    },
  },
  {
    name: 'Dark Mode',
    data: {
      '--tint-inverse': tintInverse,
      '--label': '#ffffff',
      '--secondary-label': '#ebebf59a',
      '--tertiary-label': '#ebebf54d',
      '--quaternary-label': '#ebebf52e',
      '--fill': '#7878805c',
      '--secondary-fill': '#78788052',
      '--tertiary-fill': '#7676803d',
      '--quaternary-fill': '#7474802e',
      '--placeholder-text': '',
      '--background': '#000000',
      '--secondary-background': '#1c1c1e',
      '--tertiary-background': '#2c2c2e',
      '--grouped-background': '#000000',
      '--secondary-grouped-background': '#1c1c1e',
      '--tertiary-grouped-background': '#2c2c2e',
      '--separator': '#545458a6',
      '--opaque-separator': '#38383a',
      '--link': tint,
    },
  },
];

export default colorModes;
