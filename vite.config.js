import { defineConfig } from 'vite'
import postcssNested from 'postcss-nested'
import postcssSimpleVars from 'postcss-simple-vars'
import postcssMixins from 'postcss-mixins'

export default defineConfig({
  root: './',
  base: './',
  assetsInclude: ['./assets/**/*.*'],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.')[1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img'
          }
          if (/woff|woff2|ttf/i.test(extType)) {
            extType = 'fonts'
          }
          return `assets/${extType}/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    emptyOutDir: true,
    outDir: './dist',
  },
  css: {
    postcss: {
      plugins: [postcssNested, postcssSimpleVars, postcssMixins],
    },
  },
})
