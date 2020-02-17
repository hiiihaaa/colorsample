$(document).on('turbolinks:load', function(){
  var boxes = document.querySelector(".colorTheme").children
  $.each(boxes, function(index, box){
    if(index < 4){
      $(box).css('background-color', `rgb(255,${index*64},0)`)
    }else if (index < 8){
      $(box).css('background-color', `rgb(${255 - (index-4)*64},255,0)`)
    }else if (index < 12){
      $(box).css('background-color', `rgb(0,255,${index-8*64})`)
    }else if (index < 16){
      $(box).css('background-color', `rgb(0,${255 - (index-12)*64},255)`)
    }else if (index < 20){
      $(box).css('background-color', `rgb(${(index-16)*64},0,255)`)
    }else{
      $(box).css('background-color', `rgb(255,0,${255-(index-20)*64})`)
    }
  })
})