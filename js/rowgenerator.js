var RowGenerator = (function(){
	function newRow(newRowId, divClass, widgetName){
		var newRow = document.createElement('div');
		newRow.className = divClass;
		newRow.style.height = '80px';
		newRow.style.backgroundColor = Builder.getBackgroundColor();
		newRow.id = newRowId;
		newRow.innerHTML = widgetName;
		newRow.onclick = startEdit;
		newRow.onblur = endEdit;
		return {
			id: newRowId, 
			element: newRow
		}
	}

	function startEdit(){
		this.style.border = '1px solid black';
	}

	function endEdit(){
		this.style.border = '0px';
	}

	return {
		newRow: newRow
	};
})();

