console.log("Sanity Check: JS is working!");

// $(document).ready(function(){

	$('#toDoForm').on("submit", function(e) {
		e.preventDefault();
		$('#toDoUl').append('<li>' + ($('#inputTask').val()));
		$('#inputTask').val(" ");
	})
// });