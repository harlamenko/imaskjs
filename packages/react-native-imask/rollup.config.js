import { babel } from '@rollup/plugin-babel';
import multi from 'rollup-plugin-multi-input';
import replace from '@rollup/plugin-replace';
import pkg from './package.json' with { type: 'json' };


const input = ['src/**'];
const extensions = ['.js', '.ts'];
const globals = {
  react: 'React',
  'react-native': 'ReactNative',
  '@bsolute/imask-react': 'ReactIMask',
  'prop-types': 'PropTypes',
  '@bsolute/imask': 'IMask',
};
const babelConfig = {
  extensions,
  rootMode: 'upward',
  babelHelpers: 'runtime',
  include: input,
};

export default [
  {
    input: 'src/index.js',
    external: Object.keys(globals),
    output: {
      name: 'ReactNativeIMask',
      file: pkg.main,
      globals,
      format: 'umd',
      sourcemap: true,
      interop: 'auto',
    },
    plugins: babel(babelConfig),
  },
  {
    input,
    output: {
      format: 'esm',
      dir: 'esm',
    },
    plugins: [
      replace({
        "import '@bsolute/imask'": "import '@bsolute/imask/esm'",
        "import IMaskMixin from '@bsolute/imask-react'": "import IMaskMixin from '@bsolute/imask-react/esm/mixin'",
        "import MaskElement from '@bsolute/imask'": "import MaskElement from '@bsolute/imask/esm/controls/mask-element'",
        delimiters: ['', ''],
      }),
      multi.default(),
      babel(babelConfig),
    ]
  },
  {
    input: 'src/index.js',
    external: Object.keys(globals),
    output: {
      name: 'ReactNativeIMask',
      file: 'dist/react-native-imask.cjs',
      globals,
      format: 'cjs',
      sourcemap: true,
      interop: 'auto',
    },
    plugins: babel(babelConfig),
  },
];
