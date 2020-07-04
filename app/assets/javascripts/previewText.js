$(document).on('turbolinks:load', function(){
  $('.input-text').on('change', function(){
    $('.preview-text').empty()
    $('.preview-text').append("<div class = 'preview-text__input'>"+this.value+"</div>")
  })

  $('.AXIS').on('click', function(){
    $('.preview-text__input').css('font-family', 'AXIS')
  })
  $('.hiragino').on('click', function(){
    $('.preview-text__input').css('font-family', 'Hiragino Sans')
  })
  $('.meirio').on('click', function(){
    $('.preview-text__input').css('font-family', 'Meiryo')
  })
  $('.MB31').on('click', function(){
    $('.preview-text__input').css('font-family', '見出ゴMB31')
  })
  $('.MA31').on('click', function(){
    $('.preview-text__input').css('font-family', '見出ミンMA31')
  })
  $('.rtyumin').on('click', function(){
    $('.preview-text__input').css('font-family', 'リュウミン')
  })
  $('.Arial').on('click', function(){
    $('.preview-text__input').css('font-family', 'Arial')
  })
  $('.GEORGIA').on('click', function(){
    $('.preview-text__input').css('font-family', 'GEORGIA')
  })
  $('.Myriad').on('click', function(){
    $('.preview-text__input').css('font-family', 'Myriad')
  })
  $('.Verdana').on('click', function(){
    $('.preview-text__input').css('font-family', 'Verdana')
  })
  $('.TimesNewRoman').on('click', function(){
    $('.preview-text__input').css('font-family', 'TimesNewRoman')
  })
})