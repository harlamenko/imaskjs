import { babel } from '@rollup/plugin-babel';
import multi from 'rollup-plugin-multi-input';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json' with { type: 'json' };


const globals = {
  imask: 'IMask'
};
const extensions = ['.js', '.ts'];
const input = ['src/**'];
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
      name: 'SvelteIMask',
      file: pkg.main,
      format: 'umd',
      sourcemap: true,
      globals,
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
        "import IMask from '@bsolute/imask'": "import IMask from '@bsolute/imask/esm/imask'",
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
      name: 'SvelteIMask',
      file: 'dist/svelte-imask.cjs',
      format: 'cjs',
      sourcemap: true,
      globals,
      interop: 'auto',
    },
    plugins: commonPlugins,
  },
]
