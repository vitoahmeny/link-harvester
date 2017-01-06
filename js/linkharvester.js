(function (window) {
	var linkharvester = {};
	linkharvester.harvestLink = function (str) {
		var anchorPattern = /<a[^]+?>[^]+?<\/a>/g;
		var anchorTextPattern = /\>([^]+?)<\/a>/;
		var urlPattern = /\"(http[^]+?)\"/;
		var emailPattern  = /\"mailto\:(\w+?\@\w+?\.com)\"/;
		var matched = [];
		var harvested = {};
			harvested.links = [];
			harvested.emailAddress = [];
			str.replace(anchorPattern, function (match) {
			matched.push(match);
		})

		matched.forEach(function (ele, index) {
			if (urlPattern.test(ele) && anchorTextPattern.test(ele)) {
				var linkObj = {};
				linkObj.linkText = anchorTextPattern.exec(ele)[1];
				linkObj.url = urlPattern.exec(ele)[1];
				harvested.links.push(linkObj);
			}

			else if (emailPattern.test(ele)) {
				harvested.emailAddress.push(emailPattern.exec(ele)[1]);
			}

			
		})

			return harvested;

	}
	window.linkharvester = linkharvester;
})(window);