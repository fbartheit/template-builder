var Editor = (function(){
	var $primaryColorPicker = $('#primary_color');
	$primaryColorPicker.on('change input', _setPrimaryColor);

	var $secondaryColorPicker = $('#secondary_color');
	$secondaryColorPicker.on('change input', _setSecondaryColor);

	var $applyChangesButton = $('#btn_apply_changes');
	//$applyChangesButton.on('click', _applyChanges);

	function _setPrimaryColor(){
		var color = $primaryColorPicker.val();
		Builder.setPrimaryColor(color);
	}

	function _setSecondaryColor(){
		var color = $secondaryColorPicker.val();
		Builder.setSecondaryColor(color);
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