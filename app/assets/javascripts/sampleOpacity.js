// $(document).on('turbolinks:load', function(){
//   $('.colorPreview').on('change', '#opacity_switch', function(){
//     var opa_switch = document.getElementById('opacity_switch').value
//     var targetColor = document.getElementById('preview').style.getPropertyValue('background-color')
//     var color16 =$(preview).data("color")
//     if(opa_switch == 2){
//       $('.colorSample__boxes').css('background-image', 'url(assets/background.png)')
//       $('.box').css('background-color', targetColor)
//       $('.box').attr('data-color', color16)
//       $('.box').empty()
//       for(var i = 0; i < 9; i++){
//         for(var j=1; j < 29; j++){
//           $("#colorSampleBox"+i+j).css('opacity', 0.1+0.03*j)  //opacityの開始位置を少し調整
//         }
//       }
//     }else if(opa_switch ==1){
//       $('.colorSample__boxes').css('background-image', '')
//       $('.box').css('opacity', '1')
//       $('.box').css('background-color', targetColor)
//       $('.box').empty()
//       $('.box').append("<div class='box__font'>"+targetColor+"</div>")
//     }
//   })
// })
