$(document).ready(function() {
  $(".btn--arrow").click(function() {
    $(".btn__icon--rotate").toggleClass('rotate-90-deg');
    $(".btn--arrow").toggleClass('rotate-2-deg');
  });

  $("#mesa-logo-click").click(function() {
    window.location.href = 'https://www.mesa-ceramics.com/'
  });

  $("#oli-logo-click").click(function() {
    window.location.href = 'https://www.oli-world.com/pt/'
  });

  $("#atena-logo-click").click(function() {
    window.location.href = 'http://atena-ai.pt/'
  });

  $("#ua-logo-click").click(function() {
    window.location.href = 'https://www.ua.pt/'
  });
});
