<template>
  <div class="display_and_controller">
    <div class="show-value">
      <div class="show-value__background" :style="styleObject5" @click="target(styleObject5.fontSwitch)">
        background
        <div class="show-value__hexadecimal col">
          <span class="show-value__hexadecimal--caption">color: </span>
          <div class="show-value__hexadecimal--value">{{styleObject3.backRgb}}</div>
        </div>
        <div class="show-value__opacity col">
          <span class="show-value__opacity--caption"> opacity:</span>
          <div class="show-value__opacity--value">{{styleObject3.bOpa}}</div>
        </div>
      </div>
      <div class="show-value__background" :style="styleObject6" @click="target(styleObject6.fontSwitch)">
        font
        <div class="show-value__hexadecimal col">
          <span class="show-value__hexadecimal--caption">font:</span> 
          <div class="show-value__hexadecimal--value">#{{styleObject3.fontRgb}}</div>
        </div>
        <div class="show-value__opacity col">
          <span class="show-value__opacity--caption">opacity:</span>
          <div class="show-value__opacity--value">{{styleObject3.fOpa}}</div>
        </div>
      </div>
      <div class="show-value__fontstyle"></div>
    </div>

    <div class="controller__colors">
      <div class="controller__colors__contrast col"></div>

      <div class="controller__colors__image col">
        <span>image</span>
        <label for='input_image'>
          select file
          <input class="vanish" type='file' id='input_image' @change="insertImage">
        </label>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name:'selectTarget',
  data:function(){
    const styleObject5={border:"solid 1pt", borderColor: "#d0ff40", fontSwitch:1}
    const styleObject6={border:"solid 1pt", borderColor: "#ffffff", fontSwitch:2}
    return {styleObject5, styleObject6}
    
  },
  computed:{
    backImage(){
      return this.$store.getters.getImage
    },
    styleObject3(){
      return this.$store.getters.getStyleObject3
    },
    styleObject4(){
      return this.$store.getters.getStyleObject4
    }
  },
  methods:{
    target(fontSwitch){
      this.styleObject3.fontSwitch=fontSwitch
      if(fontSwitch==1){
        this.styleObject5.borderColor="#d0ff40"
        this.styleObject6.borderColor="#ffffff"
      }else if(fontSwitch==2){
        this.styleObject5.borderColor="#ffffff"
        this.styleObject6.borderColor="#d0ff40"
      }
    },
    async insertImage(e) {
      const files = e.target.files || e.dataTransfer.files
      const file = files[0]
      if (this.checkFile(file)) {
        const picture = await this.getBase64(file)
        if(this.styleObject3.fontSwitch==1){
          const rgb=this.styleObject3.bArrRgb
          this.opacitySwitch=2
          this.$emit('emitOpacityMode',2)
          this.styleObject3.backgroundColor="rgba("+rgb[0]+","+rgb[1]+","+rgb[2]+","+"0)"
          this.styleObject4.backgroundImage="url("+picture+")"
          return this.styleObject3, this.styleObject4
        }else if(this.styleObject3.fontSwitch==2){
          const rgb=this.styleObject3.fArrRgb
          this.opacitySwitch=2
          this.styleObject4.backgroundColor=this.styleObject3.backgroundColor
          this.styleObject3.backgroundClip= "text"
          this.styleObject3.WebkitBackgroundClip="text"
          this.styleObject3.color="rgba("+rgb[0]+","+rgb[1]+","+rgb[2]+","+"0)"
          this.styleObject3.backgroundImage="url("+picture+")"

          return this.styleObject3
        }
      }
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
      })
    },
    checkFile(file) {
      let result = true
      const SIZE_LIMIT = 5000000 // 5MB
      // キャンセルしたら処理中断
      if (!file) {
        result = false
      }
      // jpeg か png 関連ファイル以外は受付けない
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        result = false
      }
      // 上限サイズより大きければ受付けない
      if (file.size > SIZE_LIMIT) {
        result = false
      }
      return result
    }
  }
}
</script>