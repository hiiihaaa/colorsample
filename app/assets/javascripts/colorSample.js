$(document).on('turbolinks:load', function(){
  console.log(('no'))
  $('.box').on('click', function(){
    console.log(this)
  })
})