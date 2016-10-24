var Editor = (function(){
	var $primaryColorPicker = $('#primary_color');
	$primaryColorPicker.on('change input', _setPrimaryColor);
	$primaryColorPicker.val(Builder.getPrimaryColor());

	var $secondaryColorPicker = $('#secondary_color');
	$secondaryColorPicker.on('change input', _setSecondaryColor);
	$secondaryColorPicker.val(Builder.getSecondaryColor());

	var $backgroundColorPicker = $('#background_color');
	$backgroundColorPicker.on('change input', _setBackgroundColor);
	$backgroundColorPicker.val(Builder.getBackgroundColor());

	var $widgetSelector = $('#widget_selector');

	var $applyChangesButton = $('#btn_apply_changes');
	//$applyChangesButton.on('click', _applyChanges);

	var acc = document.getElementsByClassName("accordion");
	var i;
	for (i = 0; i < acc.length; i++) {
	    acc[i].onclick = function(){
	        this.classList.toggle("active");
	        this.nextElementSibling.classList.toggle("show");
	    }
	}

	var $addRowButton = $('#btn_add_row');
	$addRowButton.on('click', _addRow);

	var $confirmNewRow = $('#btn_confirm_new_row');
	$confirmNewRow.on('click', function() {
        modal.style.display = "none";
        var widgetName = $widgetSelector.val();
        Builder.addRow(widgetName);
    });
    
    // Get the modal
    var modal = document.getElementById('myModal');
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

	function _setPrimaryColor(){
		var color = $primaryColorPicker.val();
		Builder.setPrimaryColor(color);
	}

	function _setSecondaryColor(){
		var color = $secondaryColorPicker.val();
		Builder.setSecondaryColor(color);
	}

	function _setBackgroundColor(){
		var color = $backgroundColorPicker.val();
		Builder.setBackgroundColor(color);
	}

	function _addRow(){
		modal.style.display = "block";
	}

	function _applyChanges(){
		_setPrimaryColor();
		_setSecondaryColor();
		Builder.applyChanges();
	}

	return { // return nothing becase, every input element has a 'change' listener
		//setPrimaryColor: this.setPrimaryColor,
		//setSecondaryColor: this.setSecondaryColor,
	};
})();

function _makeId(length){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < length; i++ ){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;

}