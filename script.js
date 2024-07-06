$(window).scroll(function() {
    
    var nav = $('#nav');
    if ($(window).scrollTop() > 200) {
      nav.css('background-color', 'rgba(0, 0, 0, 0.8)');
    } else { 
      nav.css('background-color', 'transparent');
    }
  });
  $('#nav li').hover(function() {
    $(this).css('color', 'white');
  }, function() {
    $(this).css('color', 'black');
  });