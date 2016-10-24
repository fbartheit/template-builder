var Builder = (function(){
	var colors = {
		primary: '#000000',
		secondary: '#ffffff',
		background: '#66aacc'
	};

	var rows = [];

	var canvas = document.getElementById('canvas');

	function addRow(widgetName){
		// request widget content via ajax
		var newRowId = _makeId(10);
		var newRow = RowGenerator.newRow(newRowId, 'row', widgetName);
		rows.push(newRow);
		canvas.appendChild(newRow.element);
	}

	function getRows(){
		return rows;
	}
	
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

	function setBackgroundColor(c){
		colors.background = c;
		_render();
		console.log('Set BACKGROUND_COLOR: ' + c);
	}

	function getBackgroundColor(){
		return colors.background;
	}

	function applyChanges(){
		_render();
	}

	function _render(){
		canvas.style.color = colors.primary;

	}

	_render();

	return {
		setPrimaryColor: setPrimaryColor,
		getPrimaryColor: getPrimaryColor,
		setSecondaryColor: setSecondaryColor,
		getSecondaryColor: getSecondaryColor,
		setBackgroundColor: setBackgroundColor,
		getBackgroundColor: getBackgroundColor,
		addRow: addRow,
		getRows: getRows,
		applyChanges: applyChanges
	};
})();