$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $(".person1").append("blah blah");
    $(".person2").append("blah blah");
    $(".animal").append("blah blah");
    $(".exclamation").append("blah blah");
    $(".verb").append("blah blah");
    $(".noun").append("blah blah");
      });
  $("button.btn").click(function() {
    $("#story").show();
    event.preventDefault();
  });


});
