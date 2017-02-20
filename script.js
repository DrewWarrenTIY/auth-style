$('body').on('click', '.js-remember-label', function (ev) {
  ev.preventDefault();
  ev.stopPropagation();

  if ($('.js-remember-label').find('.js-remember-checkbox').prop('checked') === true ) {
    $('.js-remember-label').find('.js-remember-status').removeClass('fa-check-square-o');
    $('.js-remember-label').find('.js-remember-status').addClass('fa-square-o dap-remember-margin');
    $('.js-remember-label').find('.js-remember-checkbox').prop('checked', false);
    $('.js-remember-btn').removeClass('dap-full-button-purple');
    $('.js-remember-btn').addClass('dap-full-button-green');
    $('.js-remember-btn').text('SIGN IN ONCE');
  } else if ($('.js-remember-label').find('.js-remember-checkbox').prop('checked') === false ) {
    $('.js-remember-label').find('.js-remember-status').removeClass('fa-square-o dap-remember-margin');
    $('.js-remember-label').find('.js-remember-status').addClass('fa-check-square-o');
    $('.js-remember-label').find('.js-remember-checkbox').prop('checked', true);
    $('.js-remember-btn').removeClass('dap-full-button-green');
    $('.js-remember-btn').addClass('dap-full-button-purple');
    $('.js-remember-btn').text('SIGN IN FOREVER');
  }  
  
});

$('body').on('click', '.js-auth-li-enabled', function (ev) {
  ev.preventDefault();
  ev.stopPropagation();  

  var $checkbox = $(this)
  if ($checkbox.find('.js-auth-checkbox').prop('checked') === true ) {
    $checkbox.removeClass('fa-check-square-o');
    $checkbox.addClass('fa-square-o');
    $checkbox.find('.js-auth-checkbox').prop('checked', false);
  } else if ($checkbox.find('.js-auth-checkbox').prop('checked') === false ) {
    $checkbox.removeClass('fa-square-o');
    $checkbox.addClass('fa-check-square-o');
    $checkbox.find('.js-auth-checkbox').prop('checked', true);
  }  
  
});