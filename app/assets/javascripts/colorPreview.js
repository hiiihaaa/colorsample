$(document).on('turbolinks:load', function(){
  $('.box').on('clock', function(){
    $(this).css('background-color', `rgb(${colorR}, ${colorG}, ${colorB})`)
  })
})