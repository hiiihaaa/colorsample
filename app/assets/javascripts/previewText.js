$(document).on('turbolinks:load', function(){
  $('.input-text').on('change', function(){
    $('.preview-text').empty()
    $('.preview-text').append(`<div class = 'preview-text__input'> ${this.value}</div>`)
  })
})