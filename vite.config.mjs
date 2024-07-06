// Plugins
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Fonts from 'unplugin-fonts/vite'
import Layouts from 'vite-plugin-vue-layouts'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { VitePluginRadar } from 'vite-plugin-radar'
import { VitePWA } from 'vite-plugin-pwa'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    VitePWA({
      // 設定快取自動產生
      registerType: 'autoUpdate',
      // 設定 workbox 如何自動產生 service worker
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js,css,html,jpg,png,svg,gif,woff,eot,woff2,ico,ttf}**'],
        ignoreURLParametersMatching: [/.*/]
      },
      manifest: {
        // 名稱
        name: '番茄鐘',
        short_name: '番茄鐘',
        // 工具列顏色
        theme_color: '#f5c5f3',
        // 啟動畫面背景色
        background_color: '#f5c5f3',
        // 啟動網址
        start_url: './',
        // PWA 範圍，超出範圍會用瀏覽器顯示
        scope: './',
        // 顯示方式
        display: 'standalone',
        icons: [
          {
            src: './android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
    VitePluginRadar({
      analytics: {
        id: 'G-FCZE9JDD67'
      }
    }),
    VueRouter(),
    Layouts(),
    Vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss'
      }
    }),
    Components(),
    Fonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900'
        }]
      }
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router'
      ],
      eslintrc: {
        enabled: true
      },
      vueTemplate: true
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue'
    ]
  },
  server: {
    port: 3000
  }
})
