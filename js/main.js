document.addEventListener('DOMContentLoaded', function() {
	var parseButton = document.getElementById('parseButton');
	var codeText = document.getElementById('codeText');
	var codeOutput = document.getElementById('codeOutput');
	var fileUpload = document.getElementById('fileUpload');
	var submit = document.getElementById('submit');
	var cancel = document.getElementById('cancel');
	var parseButtonHandler = function () {
		var text = codeText.value;
		var outputObject = linkharvester.harvestLink(text);
		codeOutput.value = JSON.stringify(outputObject, null, '\t');
	}


	var submitButtonHandler = function () {
		var file = fileUpload.files[0];
		if (file) {
			var reader = new FileReader();
			reader.readAsText(file, "UTF-8");
			reader.onload = function (evt) {
			var content = evt.target.result;
			codeOutput.value = JSON.stringify(linkharvester.harvestLink(content), null, '\t');}		
		}
	}
	parseButton.addEventListener('click', parseButtonHandler);
	submit.addEventListener('click', submitButtonHandler);
});