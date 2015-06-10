  $(document).ready(function(){
    var root = 'http://jsonplaceholder.typicode.com';
    $.ajax({
      url: root + '/posts',
      method: 'GET'
    }).done(function(data) {
      console.log(data);
    });
  });
