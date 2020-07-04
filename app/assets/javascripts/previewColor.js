$(document).on('turbolinks:load', function(){
  $('.box').on('click', function(){
    var targetColor = document.getElementById(this.id).style.getPropertyValue('background-color')
    var targetOpacity = document.getElementById(this.id).style.opacity
    var color16 = $(this).data("color")
    if($('#color-target').get(0).value==1){
      $('.preview').css('background-color', targetColor)
      $('.preview').css('opacity', targetOpacity)
      $(".show-value__hexadecimal--value").empty()
      $(".show-value__hexadecimal--value").append("<div class='show-value__hexadecimal__text'>#" + color16 + "</div>")
      $(".show-value__opacity--value").empty()
      $(".show-value__opacity--value").append("<div class='show-value__opacity__text'>" + targetOpacity + "</div>")
    }else if($('#color-target').get(0).value==2){
      $('.preview-text__input').css('color', targetColor)
      $('.preview-text__input').css('opacity', targetOpacity)
    }
  })
})