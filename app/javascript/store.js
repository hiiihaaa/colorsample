import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputText: ' ',
    backImage:{backgroundImage:""},
    styleObject3: {backgroundColor:"rgba(238,238,238,1)",bArrRgb:[238,238,238],bOpa:1,color:"rgba(255,255,255,1)",fArrRgb:[238,238,238],fOpa:1,backgroundImage:"",backRgb:"eeeeee",fontRgb:"ffffff",backgroundClip: "",WebkitBackgroundClip: "",fontSwitch:1,fontWeight:"bold",fontSize:"100px",backgroundSize:"cover"},
    styleObject4: {backgroundColor:"rgba(255,255,255,1)",color:"rgba(255,255,255,1)",backgroundImage:"",backgroundSize:"cover"},
    opacitySwitch: 1
  },

  mutations: {
    setText(state, payload) {
      state.inputText = payload
    },
    setImage(state, payload) {
      state.backImage = payload
    },
    setOpacitySwitch(tate, payload) {
      state.opacitySwitch = payload
    },
    setStyleObject3(state, payload){
      state.styleObject3=payload
    },
    setStyleObject4(state, payload){
      state.styleObject4=payload
    }
  },
  getters: {
    getText(state) {
      return state.inputText
    },
    getImage(state) {
      return state.backImage
    },
    getOpacitySwitch(state) {
      return state.opacitySwitch
    },
    getStyleObject3(state){
      return state.styleObject3
    },
    getStyleObject4(state){
      return state.styleObject4
    }
  },
  actions: {
    updateText(context, payload) {
      context.commit('setText', payload)
    },
    updateImage(context, payload) {
      context.commit('setImage', payload)
    },
    updateOpacitySwitch(context, payload) {
      context.commit('setOpacitySwitch', payload)
    },
    updateStyleObject3(context, payload){
      context.commit('setStyleObject3', payload)
    },
    updateStyleObject4(context, payload){
      context.commit('setStyleObject4', payload)
    }
  }    
})