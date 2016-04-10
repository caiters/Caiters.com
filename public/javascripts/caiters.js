(function(){
  // Desktop/Tablet only: add class to body when you are no longer at the top of the page, so we can slide over the name in the nav.
  var scrollTop;
  $(document).scroll(function(e){
    scrollTop = $(window).scrollTop();
    if ( scrollTop > 0) {
      $('body').addClass('is-scrolled');
    } else {
      $('body').removeClass('is-scrolled');
    }
  });

  /*
  Contact form to do-
  - prevent clicking when btn--submitting class is on the button
  - show visual for submitting button so user isn't confused why nothing is happening (ajax loader)
  - display "message sent" or "message not sent" messages if the form succeeds/fails
  */

  // contact form
  if( $('#contactForm').length>0){

    // submit form
    $('#contactForm').submit(function(e){
      e.preventDefault();
      if(validateForm()){
        // it's good!
        $('#sendmsg').addClass('btn--submitting');
        var formData = {
          'name': $('input[name=name]').val(),
          'email': $('input[name=email]').val(),
          'message': $('textarea[name=message]').val(),
        };

        $.ajax({
          type: 'POST',
          url: '/contact',
          data: formData,
          dataType: 'json',
          encode: true
        }).done(function(data){
          $('#sendmsg').removeClass('btn--submitting');
          console.log(data);
        });


      } else {
        // it didn't validate
        console.error('error');
      }
    });

    // form validation
    var validateForm = function(){
      var error = false;
      if(!($('#name').val().length > 0)) {
        // if name length is 0, error
        $('#name').addClass('form-error');
        $('#name').next('.form-error-msg').text('Please enter your name').removeClass('form-error-msg--hidden');
        error = true;
      }
      if ( $('#email').val().length > 0){
        var re = /\S+@\S+/;
        // check if email is a valid email address string@string
        if (!re.test($('#email').val())){
          $('#email').addClass('form-error');
          $('#email').next('.form-error-msg').text('Please enter a valid email address').removeClass('form-error-msg--hidden');
          error = true;
        }
      } else {
        // if email length is 0, error
        $('#email').addClass('form-error');
        $('#email').next('.form-error-msg').text('Please enter an email address').removeClass('form-error-msg--hidden');
        error = true;
      }
      if( $('#message').val().length === 0) {
        // if message length is 0, error
        $('#message').addClass('form-error');
        $('#message').next('.form-error-msg').text('Please write a message').removeClass('form-error-msg--hidden');
        error = true;
      }
      // if we have any errors, not valid.
      if(error){
        return false;
      } else { return true; }
    };

    $('form input, form textarea').keyup(function(){
      var $this = $(this);
      if( $this.hasClass('form-error')){
        $this.removeClass('form-error');
        var errorMsg = $this.next('.form-error-msg')[0];
        console.log(errorMsg);
        $(errorMsg).addClass('form-error-msg--hidden');
      }
    });
  };
})();
