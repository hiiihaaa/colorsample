$(document).on('turbolinks:load', function(){
  $("#input_image").on('change', function(e) {
    var file = $(this).prop('files')[0];
    var reader = new FileReader()
    reader.readAsDataURL(file); 
    reader.onload = function(e) {
      $('.background_img').attr('src', reader.result)
    }
  })
})