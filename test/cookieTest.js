var fs = require('fs');
var vm = require('vm');
var assert = require("assert");

vm.runInThisContext(fs.readFileSync('node_modules/define-async/async-define.js'));
vm.runInThisContext(fs.readFileSync('cookie.js'));

document = {
	'cookie': ""
};

define(['cookie'], function(cookie) {
	describe('Cookie', function(){
		it("should set a cookie", function() {
			cookie.set('cookie-test','cookie-value',1);
			var ca = document.cookie.split(';');
			assert.equal(ca[0].split("=")[0], "cookie-test");
			assert.equal(ca[0].split("=")[1], "cookie-value");
		});

		it("should get a cookie", function() {
			cookie.set('cookie-test','cookie-value',1);
			assert.equal(cookie.get("cookie-test"), "cookie-value");
		});

		it("should return null if cookie dont exist", function() {
			assert.equal(cookie.get("cookie-test-que-nao-existe"), "");
		});
	});
});
