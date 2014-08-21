// Place your JavaScript for the exam in this file.



$(function(){
		var
    $overlay,
    $modal,
    $content,
    $open,
    $close;

		$overlay = $("#overlay");
		$open = $("#edit-button")
		$modal = $("#modal");
		$close = $("#x-button");

		$modal.hide();
		$overlay.hide();


		
		// $('body').append($overlay, $modal);
	


    $("header").on("click", "#edit-button", function() {
	    $("#overlay").show();
	    $("#modal").show();
		});

    // Close the modal
    $("header").on("click", "#x-button", function () {
	    $modal.hide();
	    $overlay.hide();
		});

		$("#modal").on("click", ".plus-button", function () {
			$(".one-dude").clone();
		})

});