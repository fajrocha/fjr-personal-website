$(document).ready(function() {
  $('.learn-more-btns-blue-bg').click(function() {
    $(this).find('i').toggleClass('far fa-arrow-alt-circle-down far fa-arrow-alt-circle-up');
  });

  $('.learn-more-btns-white-bg').click(function() {
    $(this).find('i').toggleClass('far fa-arrow-alt-circle-down far fa-arrow-alt-circle-up');
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
