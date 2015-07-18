$(function() {
    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Event listener for the contact form.
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();
        $('.button-content').addClass('animate');

        // Serialize the form data.
        var formData = $(form).serialize();

        $.ajax({
            url: $(form).attr('action'),
            data: formData,
            type: 'POST',
            success: function(response) {
                $(formMessages).removeClass('error');
               // $(formMessages).addClass('success');

                // Set the message text.
               // $(formMessages).text(response);
                $('.svg-wrap').addClass('success');
                $('button').mouseleave(function(){
                    $('.button-content').removeClass('animate');
                    setTimeout(function(){
                        $('.svg-wrap').removeClass('success');  
                    }, 200);
                });

                // Clear the form.
                $('#clientname').val('');
                $('#email').val('');
                $('#companyname').val('');
                $('#description').val('');
            },
            error: function(error) {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            }
        });
    });
});
