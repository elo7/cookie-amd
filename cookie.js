define('cookie', [], function() {
	'use strict';

	return {
		'set': function(name, value, days) {
			var d = new Date();
			d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
			var expires = 'expires=' + d.toUTCString();
			document.cookie = name + '=' + value + '; ' + expires + ';path=/';
		},
		'get': function(name) {
			var cname = name + '=';
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) === ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(cname) !== -1) {
					return c.substring(cname.length, c.length);
				}
			}
			return '';
		},
	};
});
