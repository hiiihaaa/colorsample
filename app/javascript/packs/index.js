import Vue from 'vue/dist/vue.esm'

document.addEventListener('DOMContentLoaded', () => {
  var app = new Vue({
    el: '#app',
    data: function(){
      let styleObjects=[]
      let styleObjects2=[]
      let styleObject3={backgroundColor:"rgba(238,238,238,1)",bArrRgb:[238,238,238],bOpa:1,color:"rgba(255,255,255,1)",fArrRgb:[238,238,238],fOpa:1,backgroundImage:"",backRgb:"eeeeee",fontRgb:"ffffff",backgroundClip: "",WebkitBackgroundClip: "",fontSwitch:1,fontWeight:"bold",fontSize:"100px",backgroundSize:"cover"}
      let styleObject4={backgroundColor:"rgba(255,255,255,1)",color:"rgba(255,255,255,1)",backgroundImage:"",backgroundSize:"cover"}
      const styleObject5={border:"solid 1pt", borderColor: "#d0ff40", fontSwitch:1}
      const styleObject6={border:"solid 1pt", borderColor: "#ffffff", fontSwitch:2}
      let opacitySwitch=1
      let fontSwitch=1
      const colorDiv = 24
      let backImage = {backgroundImage:""}


      // themeColor
      for(let No=1; No <=colorDiv; No++){
        let themeColor=this.colorOrder(No)
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
        styleObjects, styleObjects2, styleObject3, styleObject4, styleObject5, styleObject6,
        opacitySwitch, fontSwitch, backImage,
        inputText:'',inputFontSize: "300"
      }
    },

    methods: {
      colorOrder(No){
        let rgb=[]
        const colorDiv = 24             // themaColorのグラデーション
        const colorDivS  = colorDiv/6   // 3原色用に分割
        const colorbase = 256/4         // 色の変化幅  (1to256でナンバリング）
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
            const colorBase = this.colorOrder(Math.floor((index+Row+1)%24))

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
        }
      },
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
      preview(styleObject2){  // 2=>3への受け渡し
        if(this.styleObject3.fontSwitch==1){
          if(this.opacitySwitch==1){
            this.styleObject3.backgroundColor=styleObject2.backgroundColor.replace("rgb", "rgba").replace(")", ",1)")
            this.styleObject3.bArrRgb=styleObject2.arrRgb
            this.styleObject3.backRgb=styleObject2.rgb
            return this.styleObject3
          }else if(this.opacitySwitch==2){
            this.styleObject3.backgroundColor=styleObject2.backgroundColor.replace("rgb", "rgba").replace(")", ","+styleObject2.opacity+")")
            this.styleObject3.bOpa=styleObject2.opacity
            return this.styleObject3
          }
        }else if(this.styleObject3.fontSwitch==2){
          if(this.opacitySwitch==1){
            this.styleObject3.color=styleObject2.backgroundColor.replace("rgb", "rgba").replace(")", ",1)")
            this.styleObject3.fArrRgb=styleObject2.arrRgb
            this.styleObject3.fontRgb=styleObject2.rgb
            return this.styleObject3
          }else if(this.opacitySwitch==2){
            this.styleObject3.color=styleObject2.backgroundColor.replace("rgb", "rgba").replace(")", ","+styleObject2.opacity+")")
            this.styleObject3.fOpa=styleObject2.opacity
            return this.styleObject3
          }
        }
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
        return this.styleObjects2_2, this.styleObject3
      },
      fontsize(){
        this.styleObject3.fontSize=this.inputFontSize+"px"
        return this.styleObject3
      },

      async insertImage(e) {
        const files = e.target.files || e.dataTransfer.files
        const file = files[0]
        if (this.checkFile(file)) {
          const picture = await this.getBase64(file)
          if(this.styleObject3.fontSwitch==1){
            const rgb=this.styleObject3.bArrRgb
            this.opacitySwitch=2
            this.opacityMode(2)
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
  })
})

