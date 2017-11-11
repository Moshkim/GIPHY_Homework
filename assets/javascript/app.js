


$('#addButton').on('click', function(){

	var value = $('#usrTerm').val()

	$('.buttonContainer').append($('<button>').addClass('btn btn-warning buttons').attr('value', value).text(value))
})

$(document).on('click', '.buttons', function() {
	$('#result').empty()

	var feeling = $(this).val()
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
	feeling + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {

		console.log(response);

		var dataArray = response.data
		$('#result').append($('<div>').addClass('container').append($('<div>').addClass('row').append($('<div>').addClass('col-12').append($('<div>').addClass('row imageBoxes')))))

		for(var i = 0; i < dataArray.length; i++){
			

			$('.imageBoxes').append($('<div>').addClass('col-4').append($('<img>').attr('state', 'still').attr('stillurl', dataArray[i].images.fixed_width_still.url).attr('src',dataArray[i].images.fixed_width_still.url).attr('animateurl', dataArray[i].images.fixed_width.url).addClass('gif'), $('<p>').text("rated: " + dataArray[i].rating) ))
			//$('.imageBoxes').append()
		}

	})
})
$(document).ready(function() {


	$(document).on('click', '.gif', function() {
		var state = $(this).attr('state')

		if( state === 'still'){
			$(this).attr('state', 'animate')
			$(this).attr('src', $(this).attr('animateurl'))
		} else {
			$(this).attr('state', 'still')
			$(this).attr('src', $(this).attr('stillurl'))
		}

	})

})




