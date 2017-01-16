document.addEventListener('DOMContentLoaded', function() {
	var validateButton = document.getElementById('validateButton');
	var codeText = document.getElementById('codeText');
	var result = document.getElementById('result');
	var fileUpload = document.getElementById('fileUpload');
	var submit = document.getElementById('submit');
	var validateButtonHandler = function () {
		var text = codeText.value;
		result.value = validator.isJson(text);
	}


	var submitButtonHandler = function () {
		var file = fileUpload.files[0];
		var fileSize = file.size;
		var fileType = file.type;
		if (file && fileSize < 5000000 && fileType === "application/json") {
			var reader = new FileReader();
			reader.readAsText(file, "UTF-8");
			reader.onload = function (evt) {
			var content = evt.target.result;
					result.value = (validator.isJson(content));}		
		}
		else if (fileType !== "application/json") {
			result.value = "The uploaded file is not a JSON file."
		}

		else if (fileSize >= 5000000) {
			result.value = "Exceeds max file size limit."
		}
	}
	validateButton.addEventListener('click', validateButtonHandler);
	submit.addEventListener('click', submitButtonHandler);
});