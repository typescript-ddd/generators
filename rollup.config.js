const typescript = require("rollup-plugin-typescript2")
const peerDepsExternal = require("rollup-plugin-peer-deps-external")
const pkg = require("./package.json")

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }, {
        file: pkg.module,
        format: 'es',
    }
  ],
  plugins: [
    peerDepsExternal(),
    typescript({ useTsConfgiDeclarationDir: true }),
  ],
}