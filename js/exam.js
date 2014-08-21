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
		var $new_person = "<div class = \"one-dude\"><h2>Manager Information: </h2><form><p><label for=\"name\">Name<span style=\"color: #FF0000;\">*</span></label><input id=\"name\"/></p><p>			    <label for=\"bio\">Bio<span style=\"color: #FF0000;\">*</span></label>  <input id=\"bio\" type=\"textarea\"/></p></form></div>"

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
			for(i=0; i< $(".people .single-manager-div").length; i++) { 
				$(".dudes-group").append($new_person);
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
			$(".dudes-group").append($new_person);
			$minusButton.show()
		})

		$("#modal").on("click", ".cancel", function(){
			hideAll();
			$minusButton.hide();
			$(".one-dude").remove()
		});



});