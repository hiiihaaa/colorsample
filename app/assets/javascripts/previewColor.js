$(document).on('turbolinks:load', function(){
  $('.box').on('click', function(){
    var targetColor = $(this).data('color')
    var targetOpacity = document.getElementById(this.id).style.opacity
    $('.preview').attr('data-color', targetColor)
    $('.preview').css('background-color', '#'+targetColor)
    $('.preview').attr('data2-opacity', targetOpacity)
    $('.preview').css('opacity', targetOpacity)
    $(".show-value__hexadecimal--value").empty()
    $(".show-value__hexadecimal--value").append("<div class='show-value__hexadecimal__text'>#" + targetColor + "</div>")
    $(".show-value__opacity--value").empty()
    $(".show-value__opacity--value").append("<div class='show-value__opacity__text'>"+targetOpacity+"</div>")
    $('#opacity_switch').attr('data-color', targetColor)
  })
})