$(window).on('load', function () {
  $loaders = $('.loaders'),
    $loader = $loaders.find('.loader');
  $loader.fadeOut(1500);
  $loaders.delay(350).fadeOut(1500);
});
