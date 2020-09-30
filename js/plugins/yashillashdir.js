$(document).ready(function () {
  $.fn.yashillashdir = function (options) {
    let settings = $.extend(
      {
        color: "green",
      },
      options
    );

    return this.css({
      color: settings.color,
    });
  };
});
