(function() {
	document.addEventListener('DOMContentLoaded', loadContent);

	function loadContent() {
		var data = {
			name: "Tkach Julia",
			photo_url: "img/photo11.jpg",
			job_title: "Technical writer",
			motivation: "Wanna learn frontend because:",
			motive_list: ["new opportunities",
						  "find new job",
						  "or go freelancing",
						  "learn something new"],
			phone_title: "Cellular",
			phone_number:"+380 63 7859020",
			facebook_title: "My facebook profile",
			facebook_address: "https://www.facebook.com/jtkach2",
			facebook_url: "facebook.com",
			feedback_title: "My feedback:",
			feedback_mail: "mailto:jjtkach@yahoo.com",
			feedback: "mailto:jjtkach@yahoo.com"
		};
		var target = document.getElementById("results");
		var profile = document.getElementById("profile").innerHTML;
		target.innerHTML = tmpl(profile, data);
	}

})();