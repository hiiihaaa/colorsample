$(document).on('turbolinks:load', function(){
  $('.colorTheme__box').on('click', function(){
    // クリックした色番号を吐き出す
    var selectC = ($(this).data('index')-1)*4

    for(var i =1; i<10; i++){
      var row = document.querySelector(`#sampleRow${i}`).children
      $.each(row,function(index, box){
        if(index <= 16){   //0=>15
          if(gon.themeColor[selectC+i].rgbR == 255){
            var colorR = index*16
          }else if(gon.themeColor[selectC+i].rgbR == 0){
            var colorR = 0
          }else{
            var ratioR = (gon.themeColor[selectC+i].rgbR + 1)/256
            var colorR = ratioR * index*16
          };

          if(gon.themeColor[selectC+i].rgbG == 255){
            var colorG = index*16
          }else if(gon.themeColor[selectC+i].rgbG == 0){
            var colorG =0
          }else{
            var ratioG = (gon.themeColor[selectC+i].rgbG + 1)/256
            var colorG = ratioG * index*16
          };

          if(gon.themeColor[selectC+i].rgbB == 255){
            var colorB= index*16
          }else if(gon.themeColor[selectC+i].rgbB == 0){
            var colorB = 0
          }else{
            var ratioB = (gon.themeColor[selectC+i].rgbB + 1)/256
            var colorB = ratioB * index*16
          };

        }else{
          if(gon.themeColor[selectC+i].rgbR == 255){
            var colorR = 255
          }else{
            var ratioR = (256-gon.themeColor[selectC+i].rgbR)/256
            var colorR = (index-16)*16*ratioR + gon.themeColor[selectC+i].rgbR 
          };
          
          if(gon.themeColor[selectC+i].rgbG ==255){
            var colorG= 255
          }else{
            var ratioG = (256-gon.themeColor[selectC+i].rgbG)/256
            var colorG = (index-16)*16*ratioG + gon.themeColor[selectC+i].rgbG
          };

          if(gon.themeColor[selectC+i].rgbB==255){
            var colorB = 255
          }else{
            var ratioB = (256-gon.themeColor[selectC+i].rgbB)/256
            var colorB = (index-16)*16*ratioB + gon.themeColor[selectC+i].rgbB
          };
        }
        $(box).css('background-color', `rgb(${colorR}, ${colorG}, ${colorB})`)
        $(box).empty()
        $(box).append(`<div class='box__font'>000000</div>`)
        // $(box).dataset.colorr = colorR
        // $(box).dataset.colorg = colorG
        // $(box).dataset.colorb = colorB
      })
    }
  })
})