function sendEmail(event) {
  event.preventDefault();
  var $name = $('#name');
  var $email = $('#email');
  var $phone = $('#phone');
  var $message = $('#message');

  if (isNotEmpty($name) && isNotEmpty($email) && isNotEmpty($phone) && isNotEmpty($message)) {
    $.ajax({
      url: '/send-email.php',
      method: 'POST',
      dataType: 'json',
      data: {
        name: $name.val(),
        email: $email.val(),
        phone: $phone.val(),
        message: $message.val()
      }, success: function (response){
        console.log(response);
      }
    })
  }
}

function isNotEmpty(caller) {
  if (caller.val() == "") {
    caller.parent().css('border', '1px solid red');
    return false;
  }
  else {
    caller.parent().css('border', '');
    return true;
  }
}
