window.addEventListener('DOMContentLoaded', function() {

	var $ = function() {
		return document.querySelector(arguments[0]);
	}

	$("#convert").addEventListener('click', function() {

		var input = $("#code").value;

		var result = JS2PNG.Encode(input, "Filename");

		$("#result").innerHTML = "";

		for (var ii in result) {
			result[ii].addEventListener('click', function() {

				var data = JS2PNG.Decode(result[ii]);

					console.log(data);

			});
			$("#result").appendChild(result[ii]);
		}

	});
	
	$("#read").addEventListener('click', function() {
		
		var input = $("#image");
		
		var result = JS2PNG.Decode(input, function(response) {
			$("#code2").value = response;
		});

	});

});