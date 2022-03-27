import { defineConfig } from 'vite'
import pkg from './package.json'

function getExternals() {
  const externals = []

  if (pkg.dependencies) {
    externals.push(...Object.keys(pkg.dependencies))
  }

  if (pkg.peerDependencies) {
    externals.push(...Object.keys(pkg.peerDependencies))
  }

  return externals
}

export default defineConfig({
  build: {
    lib: {
      formats: ['cjs', 'es'],
      entry: 'src/index.ts',
      name: pkg.name,
      fileName: (format) => `${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: getExternals(),
    },
  },
})
