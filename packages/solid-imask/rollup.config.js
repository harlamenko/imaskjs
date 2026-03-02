// import withSolid from 'rollup-preset-solid';
import { babel } from '@rollup/plugin-babel';
import multi from 'rollup-plugin-multi-input';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json' with { type: 'json' };


const globals = {
  'solid-js': 'Solid',
  imask: 'IMask',
};

const extensions = ['.js', '.ts', '.tsx', '.jsx'];
const input = ['src/**'];
const commonPlugins = [
  nodeResolve({ extensions }),
  commonjs(),
  babel({
    extensions,
    rootMode: 'upward',
    babelHelpers: 'runtime',
    include: input,
    presets: [ 'solid' ],
  }),
];


export default [
  {
    input: 'src/index.ts',
    external: Object.keys(globals),
    output: {
      name: 'SolidIMask',
      file: pkg.main,
      globals,
      format: 'umd',
      sourcemap: true,
      interop: 'auto',
    },
    plugins: commonPlugins,
  },
  {
    input,
    external: [...Object.keys(globals), '@bsolute/imask/esm', '@bsolute/imask/esm/imask'],
    output: {
      format: 'esm',
      dir: 'esm',
    },
    plugins: [
      replace({
        "from '@bsolute/imask'": "from '@bsolute/imask/esm/imask'",
        "import '@bsolute/imask'": "import '@bsolute/imask/esm'",
        delimiters: ['', ''],
      }),
      multi.default(),
      ...commonPlugins,
    ]
  },
  {
    input: 'src/index.ts',
    external: Object.keys(globals),
    output: {
      name: 'SolidIMask',
      file: 'dist/solid-imask.cjs',
      globals,
      format: 'cjs',
      sourcemap: true,
      interop: 'auto',
    },
    plugins: commonPlugins,
  },
];
