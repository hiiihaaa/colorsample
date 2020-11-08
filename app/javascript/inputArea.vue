<template>
  <div class="controller-font">
    <div class="controller-font__text">
      <span>Text:</span>
      <input :value="inputText" @input="updateText">
    </div>
    <div class="controller-font__size">
      <span>font-size:</span>
      <input :value="inputFontSize" @input="fontsize">
      px
    </div>
    <div class="controller-font__style">
      <div class="controller-font__style__alphanumeric">
        <div class="Arial Arial"></div>
        <div class="GEORGIA GEORGIA"></div>
        <div class="Myriad Myriad"></div>
        <div class="Verdana Verdana"></div>
        <div class="TimesNewRoman TimesNewRoman"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inputArea',
  computed:{
    inputText(){ return this.$store.getters.getText },
    inputFontSize(){ return this.$store.getters.getFontSize },
    styleObject3(){ return this.$store.getters.getStyleObject3 }
  },
  methods:{
    fontsize(e){
      this.$store.dispatch('updateFontSize', e.target.value)
      this.styleObject3.fontSize=this.inputFontSize+"px"
    },
    updateText(e){ 
      this.$store.dispatch('updateText', e.target.value)
    }
  }
}
</script>