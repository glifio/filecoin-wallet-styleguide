import { purple, green, red } from './colors'

// colors
const colors = {
  text: '#262626',
  background: '#F6F8FE',
  purple: purple.base,
  lightpurple: purple.text,
  black: '#000',
  nearBlack: '#111',
  darkGray: '#333',
  midGray: '#555',
  silver: '#999',
  'light-silver': '#aaa',
  'moon-gray': '#ccc',
  'light-gray': '#eee',
  'near-white': '#f4f4f4',
  white: '#fff',
  transparent: 'transparent',
  success: {
    base: green.base,
    text: green.text
  },
  error: {
    base: red.base,
    textLight: red.textLight,
    textDark: red.textDark
  }
}

// theme.js
const theme = {
  colors,
  fontSizes: ['0rem', '0.875rem', '1rem', '1.25rem', '1.5rem', '2rem', '3rem'],
  fontWeights: [0, 400, 600, 900],
  letterSpacings: [0, 1, 2, 4, 8],
  lineHeights: {
    solid: 1,
    title: 1.2,
    copy: 1.4
  },
  textStyles: {
    bigTitle: {
      fontSize: [5, 6, 6],
      fontWeight: 700,
      margin: 0,
      lineHeight: 'solid',
      fontFamily: 'system-ui'
    },
    title: {
      fontSize: 5,
      fontWeight: 700,
      margin: 0,
      lineHeight: 'title',
      fontFamily: 'system-ui'
    },
    text: {
      fontSize: 2,
      fontWeight: 400,
      lineHeight: 'copy',
      fontFamily: 'system-ui'
    },
    label: {
      fontSize: 2,
      fontWeight: 700,
      textTransform: 'uppercase',
      lineHeight: 'solid',
      fontFamily: 'system-ui'
    }
  },
  fonts: {
    sansSerif:
      '"system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',
    mono:
      '"system-ui", "Segoe UI", Roboto Mono, Helvetica, Arial, monospace, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";'
  },
  space: [0, 4, 8, 16, 24, 32, 48, 64, 128, 256],
  sizes: [0, 4, 8, 16, 24, 32, 48, 64, 80, 120, 240, 300, 480],
  radii: ['0', '1px', '4px', '8px', '16px', '32px'],
  // width: [0, 16, 32, 48, 64, 128, 256],
  minWidths: [0, 16, 32, 64, 128, 256],
  maxWidths: [0, 16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  // heights: [0, 16, 32, 48, 64, 128, 256],
  minHeights: [0, 16, 32, 64, 128, 256],
  maxHeights: [0, 16, 32, 64, 128, 256],
  borders: [0, `1px solid`, `4px solid`],
  borderStyles: ['solid'],
  borderWidths: ['0', '1px', '2px', '4px'],
  breakpoints: ['40em', '52em', '64em'],
  // Alex, Todo - Use SmoothShadow https://css-tricks.com/make-a-smooth-shadow-friend/
  shadows: [
    '0',
    '0 0.9px 9px rgba(0, 0, 0, 0.017), 0 2.2px 18.6px rgba(0, 0, 0, 0.027),0 4.1px 29.7px rgba(0, 0, 0, 0.034),0 7.4px 45.2px rgba(0, 0, 0, 0.041),0 13.8px 73.1px rgba(0, 0, 0, 0.051), 0 33px 160px rgba(0, 0, 0, 0.07)'
  ],
  opacity: {
    disabled: 0.4
  },
  zIndices: [0, 9, 99, 999, 9999]
}

export default theme
