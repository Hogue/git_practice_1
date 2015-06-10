  $(document).ready(function(){
    $('#magic-button').on('click', function() {

    })
    var root = 'http://jsonplaceholder.typicode.com';
    $.ajax({
      url: root + '/posts',
      method: 'GET'
    }).done(function(data) {
      console.log(data);
      $("#list").html('');
      data.forEach(function(object){
        $("#list").append('<li><a href="">' + object.title + '</a></li>');
      });
    });
  });
