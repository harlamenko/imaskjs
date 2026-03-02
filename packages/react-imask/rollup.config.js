import { babel } from '@rollup/plugin-babel';
import multi from 'rollup-plugin-multi-input';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json' with { type: 'json' };


const input = ['src/**'];
const extensions = ['.js', '.ts'];

const globals = {
  react: 'React',
  imask: 'IMask',
  'prop-types': 'PropTypes',
};

const commonPlugins = [
  nodeResolve({ extensions }),
  commonjs(),
  babel({
    extensions,
    rootMode: 'upward',
    babelHelpers: 'runtime',
    include: input,
  }),
];


export default [
  {
    input: 'src/index.ts',
    external: Object.keys(globals),
    output: {
      name: 'ReactIMask',
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
        preventAssignment: true,
      }),
      multi.default(),
      ...commonPlugins,
    ]
  },
  {
    input: 'src/index.ts',
    external: Object.keys(globals),
    output: {
      name: 'ReactIMask',
      file: 'dist/react-imask.cjs',
      format: 'cjs',
      globals,
      sourcemap: true,
      interop: 'auto',
    },
    plugins: commonPlugins,
  },
]
