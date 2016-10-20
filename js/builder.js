var Builder = (function(){
	var colors = {
		primary: "#000000",
		secondary: "#ffffff"
	};

	var canvas = document.getElementById('canvas');
	
	function setPrimaryColor(c){
		colors.primary = c;
		_render();
		console.log('Set PRIMARY_COLOR: ' + c);
	}

	function getPrimaryColor(){
		return colors.primary;
	}
	
	function setSecondaryColor(c){
		colors.secondary = c;
		_render();
		console.log('Set SECONDARY_COLOR: ' + c);
	}

	function getSecondaryColor(){
		return colors.secondary;
	}

	function applyChanges(){
		_render();
	}

	function _render(){
		canvas.style.color = colors.primary;
		canvas.style.backgroundColor = colors.secondary;
	}

	_render();

	return {
		setPrimaryColor: setPrimaryColor,
		getPrimaryColor: getPrimaryColor,
		setSecondaryColor: setSecondaryColor,
		getSecondaryColor: getSecondaryColor,
		applyChanges: applyChanges
	};
})();
