$(document).ready(function() {
  var flavors = ['vanilla', 'chocolate', 'cinnamon', 'pineapple', 'rum'];
  flavors.forEach(function(flavor){
    $("ul").append("<li>"+flavor+"</li>");

  });
});
