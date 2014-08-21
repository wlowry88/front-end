// Place your JavaScript for the exam in this file.



$(document).ready(function(){
		var
    $overlay,
    $modal,
    $content,
    $open,
    $close;

		$overlay = $('<div id="overlay"></div>');
		$modal = $('<div id="modal"></div>');
		$content = $('<div id="content"></div>');
		$close = $('<a id="close" href="#">close</a>');

		$modal.hide();
		$overlay.hide();
		$modal.append($content, $close);

		
		// $('body').append($overlay, $modal);
	


    $("container").on("click", $open, function() {
	    $content.empty().append(settings.content);

	    // $modal.css({
	    //     width: settings.width || 'auto', 
	    //     height: settings.height || 'auto'
	    // })

	    $modal.show();
	    $overlay.show();
		});

    // Close the modal
    $("container").on("click", $close, function () {
	    $modal.hide();
	    $overlay.hide();
	    $content.empty();
		});

});