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
		$minusButton	= $(".minus-button");

		function hideAll() {
			$modal.hide();
			$overlay.hide();	
		}

		hideAll();
		$(".minus-button").hide();


		function managerNames(){
			var managers = []
			$.each($(".single-manager-info > h2"), function( index, value ) {
				managers.push($(value).text().trim());
			});
			return managers
		}

		function managerBios(){
			var bios = []
			$.each($(".single-manager-info > p"), function( index, value ) {
				bios.push($(value).text().trim());
			});
			return bios;
		}

		function addIds() {
			$.each($(".people .single-manager-div"), function ( index, value ) {
				$(value).attr('id', index);
				console.log($(value).attr("id"));
			});
		}

		addIds();

		// test
		function addFields() {
				$(".one-dude").clone().appendTo(".dudes-group");
			for(i=0; i< $(".people .single-manager-div").length; i++) { 
				$($(".one-dude")[i]).find("#name").val(managerNames()[i]);
				$($(".one-dude")[i]).find("#bio").val(managerBios()[i]);
			};
		}
		// $('body').append($overlay, $modal);
	


    $("header").on("click", "#edit-button", function() {
	    $overlay.show();
	    $modal.show();
	    addFields();
		});

    // Close the modal
    $("header").on("click", "#x-button", function () {
	    $modal.hide();
	    $overlay.hide();
		});

		$("#modal").on("click", ".plus-button", function () {
			$(".one-dude").clone().appendTo(".one-dude");
			$minusButton.show()
		})

		$("#modal").on("click", ".cancel", function(){
			hideAll();
		});



});