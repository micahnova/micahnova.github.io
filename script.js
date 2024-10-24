$(document).ready(function() {

  $("[unique-script-id='w-w-dm-id'] .btn-box").click(function() {
    $(this).parent().children(".overlay").show();

  });


  $("[unique-script-id='w-w-dm-id'] .close").click(function() {
    $(".overlay").hide();
  });

  $("[unique-script-id='w-w-dm-id'] .list").click(function() {
    const value = $(this).attr('data-filter');
    if (value == 'all') {
      $("[unique-script-id='w-w-dm-id'] .squareImg").show('1000');
    } else {
      $("[unique-script-id='w-w-dm-id'] .squareImg").not('.' + value).hide('1000');
      $("[unique-script-id='w-w-dm-id'] .squareImg").filter('.' + value).show('1000');
    }
  })
  $("[unique-script-id='w-w-dm-id'] .list").click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  })
})