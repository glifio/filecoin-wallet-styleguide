import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import { eslint } from 'rollup-plugin-eslint'
import svgr from '@svgr/rollup'

import pkg from './package.json'

const outputGlobals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
  'styled-components': 'styled',
  'styled-system': 'styled-system'
}

export default {
  input: 'src/index.js',
  external: [
    'react',
    'react-dom',
    'prop-types',
    'styled-components',
    'styled-system'
  ],
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: '@openworklabs/filecoin-wallet-styleguide',
      sourcemap: true,
      globals: outputGlobals
    },
    {
      file: pkg.module,
      format: 'es',
      name: '@openworklabs/filecoin-wallet-styleguide',
      sourcemap: true,
      globals: outputGlobals
    }
  ],
  plugins: [
    external(),
    eslint(),
    url(),
    svgr({
      ref: true,
      icon: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
}
