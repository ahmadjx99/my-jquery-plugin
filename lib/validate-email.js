(function ($) {
	$.fn.emailValidator = function () {

		// your code here
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		let email = this.val()

		return emailReg.test(email)
	}
})(jQuery)
