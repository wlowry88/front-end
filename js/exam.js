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

		var $regular_person = "<div class = \"single-manager-div clearfix\"><div class = \"single-manager-image\"><img src=\"images/executive-default-image.png\"></div><div class= \"single-manager-info\"><h2></h2><p></p></div></div>"

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

		function namesChanges(){
			var managers = []
			$.each($(".one-dude"), function( index, value ) {
				managers.push($(value).find("#name").val());
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

		function biosChanges(){
			var bios = []
			$.each($(".one-dude"), function( index, value ) {
				bios.push($(value).find("#bio").val());
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
		function updateFields() {
			$(".people div").remove()
			for(i=0; i< $(".one-dude").length; i++) { 
				var name = namesChanges()[i];
				var bio = biosChanges()[i];
				$(".people").append("<div class = \"single-manager-div clearfix\"><div class = \"single-manager-image\"><img src=\"images/executive-default-image.png\"></div><div class= \"single-manager-info\"><h2>"+name+"</h2><p>"+bio+"</p></div></div>")
			};
		}
		// $('body').append($overlay, $modal);
	
    $("header").on("click", "#edit-button", function() {
	    $overlay.show();
	    $modal.show();
	    addFields();
		});

		$(".submit-button").on("click", function(){
			hideAll();
			updateFields();
			
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