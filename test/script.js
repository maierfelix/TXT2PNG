window.addEventListener('DOMContentLoaded', function() {

	var $ = function() {
		return document.querySelector(arguments[0]);
	}

	$("#convert").addEventListener('click', function() {

		var input = $("#code").value;

		var result = JS2PNG.Encode(input, "Filename");

		$("#result").innerHTML = "";

		for (var ii in result) {
			$("#result").appendChild(result[ii]);
		}

	});

});