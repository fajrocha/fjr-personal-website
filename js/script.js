$(document).ready(function() {
  // $('.btn--arrow').click(function() {
  //   $(this).find('i').toggleClass('far fa-arrow-alt-circle-right far fa-arrow-alt-circle-down');
  // });

  $(".btn--arrow").click(function() {
    $(".icon--rotate").toggleClass('rotate-90-deg');
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
