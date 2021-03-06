import Vue from 'vue'
import Main from '../main.vue'
import store from '../store.js'

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('colorsample'))
  const app = new Vue({
    el,
    store,
    render: h => h(Main)
  })
})