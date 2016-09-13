function getSinglePlayer() {
  var playerID = $('#playerID').val()

  $.get('http://localhost:3000/players/' + playerID).done(function (data) {
    console.log(data);
    // console.log("palyer 1's name is ", data[0].name)
    // console.log("player 2's name is ", data[0].score)
    $('.singleResult').empty()
    $('.singleResult').append('<h3> Name: ' + data.name + '  Score: ' + data.score + '</h3>')
  })
}

$(document).ready(function() {
  $("#getSinglePlayer").click(getSinglePlayer)
})
