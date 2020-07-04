$(document).on('turbolinks:load', function(){
  $('.colorTheme__box').on('click', function(){
    // クリックした色番号を吐き出す
    function nozero(num){
      if(num<0){
        num=0
      }else{
        num=num
      }   
      return num
    }
    function max256(num){
      if(num==255){
        num=256
      }else{
        num=num
      }
      return num
    }
    function colorNo(num){
      if(num.length==1){
        num = "0"+num.toString(10)
      }else{
        num=num
      }
      return num
    }

    function cycleNo(num, minv, maxv){
      if(num < minv){
        num = maxv - (minv - num) + 1
      }else if(num > maxv){
        num = minv + (num - maxv) - 1
      }else{
        num = num
      }
      return num
    }

    var minv = 0
    var maxv = 95
    var colorshift =4
    var selectC = ($(this).data('index')-1)*4
    for(var i =-4; i<5; i++){
      var row = document.querySelector("#sampleRow"+(i+4)).children
      $.each(row,function(index, box){
        if(index <= 16 - colorshift){   //0=>16 マイナス色ズレ(3)
          if(gon.themeColor[cycleNo((selectC+i),minv,maxv)].rgbR == 255){
            var colorR = nozero((index+colorshift)*16-1)
          }else if(gon.themeColor[cycleNo((selectC+i),minv,maxv)].rgbR == 0){
            var colorR = 0
          }else{
            var ratioR = (gon.themeColor[cycleNo((selectC+i),minv,maxv)].rgbR + 1)/256
            var colorR = nozero(ratioR * (index+colorshift)*16-1)
          };

          if(gon.themeColor[cycleNo((selectC+i),minv,maxv)].rgbG == 255){
            var colorG = nozero((index+colorshift)*16-1)
          }else if(gon.themeColor[cycleNo((selectC+i),minv,maxv)].rgbG == 0){
            var colorG =0
          }else{
            var ratioG = (gon.themeColor[cycleNo((selectC+i),minv,maxv)].rgbG + 1)/256
            var colorG = nozero(ratioG * (index+colorshift)*16-1)
          };

          if(gon.themeColor[cycleNo((selectC+i),minv,maxv)].rgbB == 255){
            var colorB= nozero((index+colorshift)*16-1)
          }else if(gon.themeColor[cycleNo((selectC+i),minv,maxv)].rgbB == 0){
            var colorB = 0
          }else{
            var ratioB = (gon.themeColor[cycleNo((selectC+i),minv,maxv)].rgbB + 1)/256
            var colorB = nozero(ratioB * (index+colorshift)*16-1)
          };

        }else{  //17以上
          if(gon.themeColor[cycleNo((selectC+i),minv,maxv)].rgbR == 255){
            var colorR = 255
          }else{
            var ratioR = max256((255-gon.themeColor[cycleNo((selectC+i),minv,maxv)].rgbR))/256
            var colorR = ((index+colorshift)-16)*16*ratioR + gon.themeColor[cycleNo((selectC+i),minv,maxv)].rgbR
          };
          
          if(gon.themeColor[cycleNo((selectC+i),minv,maxv)].rgbG ==255){
            var colorG= 255
          }else{
            var ratioG = max256((255-gon.themeColor[cycleNo((selectC+i),minv,maxv)].rgbG))/256
            var colorG = ((index+colorshift)-16)*16*ratioG + gon.themeColor[cycleNo((selectC+i),minv,maxv)].rgbG
          };

          if(gon.themeColor[cycleNo((selectC+i),minv,maxv)].rgbB==255){
            var colorB = 255
          }else{
            var ratioB = max256((255-gon.themeColor[cycleNo((selectC+i),minv,maxv)].rgbB))/256
            var colorB = ((index+colorshift)-16)*16*ratioB + gon.themeColor[cycleNo((selectC+i),minv,maxv)].rgbB
          };
        }
        var targetColor = colorNo(colorR.toString(16)).toString(10)+colorNo(colorG.toString(16)).toString(10)+colorNo(colorB.toString(16)).toString(10)
        $(box).css('opacity', 1)
        $(box).css('background-color', "#"+targetColor)
        $(box).empty()
        $(box).append("<div class='box__font'>"+targetColor+"</div>")
        $(box).attr('data-color', targetColor)
      })
    }
    $('.colorSample__boxes').css('background-image', '')
    document.getElementById('opacity_switch').value = 1
  })
})