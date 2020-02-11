import { tint, shade, readableColor } from 'polished';

// base colors
const baseColors = {
  black: '#000',
  white: '#FFF',
  blue: '#36ADF1',
  green: '#1AD08F',
  red: '#F96C6C',
  purple: '#5E26FF'
};

// palette
// Keeping light/dark values in here for the future if we want to roll a dark theme
const colors = {
  purple: {
    base: baseColors.purple,
    text: readableColor(baseColors.purple),
    light: [null, tint(0.2, baseColors.purple)],
    dark: [null, shade(0.2, baseColors.purple)]
  },
  blue: {
    base: baseColors.blue,
    text: readableColor(baseColors.blue),
    light: [null, tint(0.9, baseColors.blue)],
    dark: [null, shade(0.4, baseColors.blue)]
  },
  green: {
    base: baseColors.green,
    text: '#08442F',
    light: [null, tint(0.9, baseColors.green)],
    dark: [null, shade(0.4, baseColors.green)]
  },
  red: {
    base: baseColors.red,
    text: '#520000',
    light: [null, tint(0.9, baseColors.red)],
    dark: [null, shade(0.4, baseColors.red)]
  }
};

const purple = colors.purple;
const blue = colors.blue;
const green = colors.green;
const yellow = colors.yellow;
const red = colors.red;

export { purple };
export { blue };
export { green };
export { red };

export default baseColors;
