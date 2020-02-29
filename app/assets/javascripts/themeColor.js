$(document).on('turbolinks:load', function(){
  var boxes = document.querySelector(".colorTheme__boxesWrap").children
  $.each(boxes, function(index, box){

    $(box).css('background-color', "rgb("+gon.themeColor[index*4].rgbR+","+gon.themeColor[index*4].rgbG+","+gon.themeColor[index*4].rgbB)
  })
})