$(function () {
  // GET function
  $('#get-button').on('click', function() {
    $.ajax({
      url: '/api/view',
      contentType: 'application/json',
      success: function(response) {
        console.log('Tulifika', response);
      }
    });
  });

  // POST function
  $('#post-button').on('click', function() {
    $.ajax({
      url: '/api/save',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({name: 'Gertrude Nyenyeshi'}),
      success: function(response) {
        console.log('Watuuuu', response);
      }
    });
  });

  // GET STARTED button function
  $('#get-started').on('click', function() {
    document.getElementById('o').innerHTML = "<h4 id='register'>Enter Attendee: </h4> <hr> <h3>One two</h3>";
    var b;
    $('#get-started').text('');
    // this.id = "go-back";
  });

  // $(document).on('click', '#go-back', function() {
  //   document.getElementById("o").innerHTML = "<h2>OoFJHFDF</h2>";
  //   console.log('Ola');
  // });
});
