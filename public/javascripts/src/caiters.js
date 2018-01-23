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

  $('.open-mobile-nav').click(function(){
    $('.main-nav').toggleClass('main-nav__open');
  });

  // contact form
  if( $('#contactForm').length>0){

    var spamPhrases = ["private loan", "qualified lender", "targeted traffic", "targeted visitors", "powerful and private web traffic", "credit or collateral"];

    function spamFree(message) {
      var isLegit = true;
      spamPhrases.forEach(function(phrase){
        if(message.indexOf(phrase) > 0) {
          isLegit = false;
        }
      });
      return isLegit;
    }

    // submit form
    $('#contactForm').submit(function(e){
      e.preventDefault();

      if( $('#sendmsg').hasClass('btn--submitting') ){
        // do nothing...
      } else {
        if(validateForm()){
          // it's good!
          $('#sendmsg').addClass('btn--submitting');
          var formData = {
            'name': $('input[name=name]').val(),
            'email': $('input[name=email]').val(),
            'message': $('textarea[name=message]').val(),
          };

          if(spamFree(formData.message)){
            $.ajax({
              type: 'POST',
              url: '/contact',
              data: formData,
              dataType: 'json',
              encode: true
            }).done(function(data){

              $('#sendmsg').removeClass('btn--submitting');
              $('#formMsgSubmit').text(data.msg).removeClass('form-msg--hidden');
              if(data.err){
                $('#formMsgSubmit').addClass('form-msg--error');
              } else {
                $('#formMsgSubmit').removeClass('form-msg--error').addClass('form-msg--success');
              }
            });
          } else {
            setTimeout(function(){
              $('#sendmsg').removeClass('btn--submitting');
              $('#formMsgSubmit').text('Huzzah!').removeClass('form-msg--hidden');
            }, 500);
          }
        }
      }
    });

    // form validation
    var validateForm = function(){
      var error = false;
      if(!($('#name').val().length > 0)) {
        // if name length is 0, error
        $('#name').addClass('form-input--error');
        $('#name').next('.form-msg--error').text('Please enter your name').removeClass('form-msg--hidden');
        error = true;
      }
      if ( $('#email').val().length > 0){

        // check if email is a valid email address string@string
        if (!testEmail($('#email').val())){
          $('#email').addClass('form-input--error');
          $('#email').next('.form-msg--error').text('Please enter a valid email address').removeClass('form-msg--hidden');
          error = true;
        }
      } else {
        // if email length is 0, error
        $('#email').addClass('form-input--error');
        $('#email').next('.form-msg--error').text('Please enter an email address').removeClass('form-msg--hidden');
        error = true;
      }
      if( $('#message').val().length === 0) {
        // if message length is 0, error
        $('#message').addClass('form-textarea--error');
        $('#message').next('.form-msg--error').text('Please write a message').removeClass('form-msg--hidden');
        error = true;
      }
      // if we have any errors, not valid.
      if(error){
        return false;
      } else { return true; }
    };

    // clear error messages when you start typing in a form field that has an error class on it. we assume you're fixing it.
    $('form input, form textarea').keyup(function(){
      var $this = $(this);
      if( $this.hasClass('form-input') || $this.hasClass('form-textarea')){
        $this.removeClass('form-input--error form-textarea--error');
        var errorMsg = $this.next('.form-msg--error')[0];
        $(errorMsg).addClass('form-msg--hidden');
      }
    });

    var testEmail = function(email){
      var re = /\S+@\S+/;
      return re.test(email);
    }

    // if something has been typed, let's check if it's a valid email address
    $('#email').blur(function(e){
      if( $('#email').val().length>0 && !testEmail($('#email').val())){
        $('#email').addClass('form-input--error');
        $('#email').next('.form-msg--error').text('Please enter a valid email address').removeClass('form-msg--hidden');
      }
    });
  };
})();
