<template>
  <div class="colorWrapper">
    <div class="header">
      <div class="header__title">
        Color Sample
      </div>
    </div>
    <div class="colorTheme">
      <div class="colorTheme__boxesWrap colorsRow">
        <div class="colorTheme__box" v-for='(styleObject, index) in styleObjects' :style="styleObject" @click="sampleColor(index)">
        </div>
      </div>
      <div class="colorTheme__discription caption">
        ①テーマカラーを選んでください
      </div>
    </div>
    
    <div class="colorSample">
      <div class="colorSample__boxes" :style="backImage">
        <div class="colorsRow" v-for="(styleObject2, index) in styleObjects2">
          <div class="box" v-for="(styleObject2_2) in styleObject2.styleObjects2_2" :style="styleObject2_2" @click="preview(styleObject2_2)">
            <div class="box__font">
              {{styleObject2_2.rgb}}
            </div>
          </div>
        </div>
      </div>

      <div class="colorSample__discription caption">
        ②確認したい色を選んでください
      </div>
    </div>

    <div class="colorPreview">
      <inputArea></inputArea>
      <preview ref="preview"></preview>
      <selectTarget @emitOpacityMode="opacityMode" @emitOpaSwitch="opacityMode"></selectTarget>
    </div>
  </div>
</template>



<script>
import inputArea from './inputArea.vue'
import preview from './preview.vue'
import selectTarget from './selectTarget.vue'

export default {
  components: { inputArea, preview, selectTarget },
  data: function(){
    let styleObjects=[]
    let styleObjects2=[]
    const colorDiv = 24

    // themeColor
    for(let No=1; No <=colorDiv; No++){
      let themeColor=this.colorOrder(No*2)
      styleObjects.push({backgroundColor: "rgb("+themeColor[0]+","+themeColor[1]+","+themeColor[2]+")"})
    }
    // sampleColor
    for(let rowNo=0; rowNo <=8; rowNo++){
      styleObjects2.push({styleObjects2_2:[]})
      for(let No=0; No <=28; No++){
        styleObjects2[rowNo].styleObjects2_2.push({backgroundColor: "rgb(238,238,238)",opacity:1,arrRgb:[238,238,238],rgb:"eeeeee"})
      }
    } 
    return {
      styleObjects, styleObjects2,
    }
  },

  computed:{
    inputText(){ return this.$store.getters.getText },
    backImage(){ return this.$store.getters.getImage },
    opacitySwitch(){ return this.$store.getters.getOpacitySwitch },
    styleObject3(){ return this.$store.getters.getStyleObject3 },
    styleObject4(){ return this.$store.getters.getStyleObject4 }
  },

  methods: {
    colorOrder(No){
      let rgb=[]
      const colorDiv = 48             // themaColorのグラデーション  8*6=48
      const colorDivS = colorDiv/6    // 3原色用に分割
      const colorbase = 256/8         // 色の変化幅  (1to256でナンバリング）
      if(No<=colorDivS){
        rgb.push(255)
        rgb.push(colorbase*No)
        rgb.push(0)
      }else if(No<=colorDivS*2){
        rgb.push(256-((No-colorDivS)*colorbase))
        rgb.push(255)
        rgb.push(0)
      }else if(No<=colorDivS*3){
        rgb.push(0)
        rgb.push(255)
        rgb.push(colorbase*(No-colorDivS*2))
      }else if(No<=colorDivS*4){
        rgb.push(0)
        rgb.push(256-(colorbase*(No-colorDivS*3)))
        rgb.push(255)
      }else if(No<=colorDivS*5){
        rgb.push(colorbase*(No-colorDivS*4))
        rgb.push(0)
        rgb.push(255)
      }else if(No<=colorDivS*6){
        rgb.push(255)
        rgb.push(0)
        rgb.push(256-(colorbase*(No-colorDivS*5)))
      }
      return rgb
    },
    sampleColor(index){  //index;0to28
      if(this.opacitySwitch==1){
        for(let No=0; No <=29*9-1; No++){
          const Row= Math.floor((No)/29) 
          const Col=No%29
          const colorBase = this.colorOrder(Math.floor((index*2+Row+46)%48))
          const diffLRgb=colorBase.map(function(f){return Math.round(f/16)})        // 基準点から下16分割末端切り捨て
          const diffHRgb=colorBase.map(function(f){return Math.round((255-f)/16)})  // 基準点から上16分割末端切り捨て
          let rgb=[]
          
          // boxに割り当てる色をrgbの配列に格納
          for(let rgbId=0; rgbId <=2; rgbId++){
            if(Col==14){
              rgb.push(colorBase[rgbId])   
            }else if(Col<14){
              rgb.push((Col+2)*diffLRgb[rgbId])
            }else if(Col>14){
              rgb.push(colorBase[rgbId]+(Col-14)*diffHRgb[rgbId])
            }
          }
          // boxに色を割当
          rgb=rgb.map(function(f){
            if(f>255){f=255}
            return f
          })
          this.styleObjects2[Row].styleObjects2_2[Col].backgroundColor="rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")"
          this.styleObjects2[Row].styleObjects2_2[Col].arrRgb=[rgb[0],rgb[1],rgb[2]]
          const rgb16=rgb.map(function(f){
            if(f<=15){
              return "0"+f.toString(16)
            }else{
              return f.toString(16)
            }
          })
          this.styleObjects2[Row].styleObjects2_2[Col].rgb=rgb16[0]+rgb16[1]+rgb16[2]
        } 
        return this.styleObjects2_2
      }else if(this.opacitySwitch==2){
        const colorBase=this.colorOrder(Math.floor(index))
        for(let Row=0; Row <=8; Row++){
          for(let Col=0; Col <=28; Col++){
            this.styleObjects2[Row].styleObjects2_2[Col].backgroundColor="rgb("+colorBase[0]+","+colorBase[1]+","+colorBase[2]+")"     
          }
        }
        return this.styleObjects2_2
      }
    },
    preview(styleObject2){
      this.$refs.preview.childPreview(styleObject2, this.opacitySwitch)
    },
    opacityMode(opacitySwitch){
      if(opacitySwitch==2){
        for(let Row=0; Row <=8; Row++){
          for(let Col=0; Col <=28; Col++){
            this.styleObjects2[Row].styleObjects2_2[Col].backgroundColor=this.styleObject3.backgroundColor.replace("rgba", "rgb").replace(",1)", ")")
            this.styleObjects2[Row].styleObjects2_2[Col].arrRgb=this.styleObject3.bArrRgb
            this.styleObjects2[Row].styleObjects2_2[Col].rgb=this.styleObject3.rgb
            this.styleObjects2[Row].styleObjects2_2[Col].opacity=0.03*(Col+5)
            this.backImage.backgroundImage="url(assets/background.png)"
          }
        }
      }else if(opacitySwitch==1){
        for(let Row=0; Row <=8; Row++){
          for(let Col=0; Col <=28; Col++){
            this.styleObjects2[Row].styleObjects2_2[Col].backgroundColor="rgb("+this.styleObject3.bArrRgb[0]+","+this.styleObject3.bArrRgb[1]+","+this.styleObject3.bArrRgb[2]+")"
            this.styleObjects2[Row].styleObjects2_2[Col].opacity=1
            if(this.styleObject3.fontSwitch==1){
              this.styleObject3.bOpa=1
            }else if(this.styleObject3.fontSwitch==2){
              this.styleObject3.fOpa=1
            }
            this.backImage.backgroundImage=""       
          }
        }
      }
      return this.styleObjects2_2
    }
  }
}
</script>

<style scoped>
</style>
