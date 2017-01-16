(function (global) {
	var validator = {};
	validator.isJson = function (str) {
		try{
			var obj = JSON.parse(str);
			if (obj && typeof obj === "object") {
				return "Your JSON is valid";
			}
		} catch(e) {
			return e.message;
		}
	}
	global.validator = validator;
})(window)