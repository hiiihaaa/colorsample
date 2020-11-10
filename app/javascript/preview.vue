<template>
  <div class="previewWrap">
    <p class="preview" id="preview" :style="styleObject3">{{inputText}}</p>
    <div class="background_img" :style="styleObject4"></div>
  </div>
</template>


<script>
export default {
  name: 'preview',
  computed:{
    inputText(){ return this.$store.getters.getText },
    styleObject3(){ return this.$store.getters.getStyleObject3 },
    styleObject4(){ return this.$store.getters.getStyleObject4 },
    opacitySwitch(){ return this.$store.getters.getOpacitySwitch }
  },
  methods:{
    childPreview(styleObject2, opacitySwitch){  // 2=>3への受け渡し
      if(this.styleObject3.fontSwitch==1){
        if(opacitySwitch==1){
          this.styleObject3.backgroundColor=styleObject2.backgroundColor.replace("rgb", "rgba").replace(")", ",1)")
          this.styleObject3.bArrRgb=styleObject2.arrRgb
          this.styleObject3.backRgb=styleObject2.rgb
        }else if(opacitySwitch==2){
          this.styleObject3.backgroundColor=styleObject2.backgroundColor.replace("rgb", "rgba").replace(")", ","+styleObject2.opacity+")")
          this.styleObject3.bOpa=styleObject2.opacity.toFixed(2)
        }
      }else if(this.styleObject3.fontSwitch==2){
        if(opacitySwitch==1){
          this.styleObject3.color=styleObject2.backgroundColor.replace("rgb", "rgba").replace(")", ",1)")
          this.styleObject3.fArrRgb=styleObject2.arrRgb
          this.styleObject3.fontRgb=styleObject2.rgb
        }else if(opacitySwitch==2){
          this.styleObject3.color=styleObject2.backgroundColor.replace("rgb", "rgba").replace(")", ","+styleObject2.opacity+")")
          this.styleObject3.fOpa=styleObject2.opacity.toFixed(2)
        }
      }
    }
  }
}
</script>

<style scoped>
.previewWrap{
  position: relative;
  margin: auto;
  height: 250px;
  width: 350px;
  display: table;
}
.previewWrap .preview {
  position:absolute;
  display: table-cell;
  vertical-align: middle;
  z-index:2;
  height: 250px;
  width: 350px;
  text-align: center;
  /* word-break: normal; */
  background-size:"cover";

}
.previewWrap .background_img{
  height: 250px;
  width: 350px;
  z-index:1;
}

</style>