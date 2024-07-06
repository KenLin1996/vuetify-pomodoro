/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        primary: '#F4B4C4', // 粉紅色背景
        secondary: '#565656', // 深灰色文字
        accent: '#F16771', // 強調文字色、按鈕背景、倒計時數字
        background: '#EDEDED', // 淺灰色背景
        timerBg: '#FFFFFF', // 計時器區域背景
        timerText: '#565656' // 計時器區域文字
      }
    }
  }
})
