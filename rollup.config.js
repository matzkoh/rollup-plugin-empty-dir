/* eslint-env node */

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'build/bundle-esm.js',
        format: 'esm',
        sourcemap: 'inline',
      },
      {
        file: 'build/bundle-cjs.js',
        format: 'cjs',
        sourcemap: 'inline',
      },
    ],
    external: ['fs-extra'],
  },
]
