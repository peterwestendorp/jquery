jQuery.fn.excuseMe = function() {
		jQuery.polite.status = true;
		return this;
};

// Expose jQuery to the global object
window.jQuery = window.GBP = jQuery;
})(window);
