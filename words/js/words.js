$(document).ready(function() {
  $(document).on('click keydown touchend', generate);
});

function generate(e) {
  
  e.preventDefault();
  
  var next = getRandomWord();
  
  $("#category").html(next.category);
  $("#word").html(next.word);
}