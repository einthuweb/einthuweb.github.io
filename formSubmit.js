$('#PlayForm').submit(function(e){
    e.preventDefault();

    $.ajax({
        url: 'http://192.168.1.122:8080/play',
        method: 'post',
        data: $('#playBtn').val()
    })
    .done(function(response){
        alert(response); // show the response
        $("#myForm").reset(); // reset the form
    })
    .fail(function(error){
        alert(error); // show the error.
    });
})