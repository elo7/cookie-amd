# Cookie-amd

_Cookie-amd browser cookie library_

Cookie.js is a library that manipulates browser cookie. This library uses [amd](http://en.wikipedia.org/wiki/Asynchronous_module_definition) structure.

[![Build Status](https://travis-ci.org/elo7/cookie-amd.svg?branch=master)](https://travis-ci.org/elo7/cookie-amd)

## Install

Install with [Npm](https://www.npmjs.com/): `npm install elo7-cookie-amd`

## Dependency

Cookie-amd depends on an [amd](http://en.wikipedia.org/wiki/Asynchronous_module_definition) implementation. We suggest [define-async](https://www.npmjs.com/package/define-async) implementation for dependency lookup.

## Methods

#### get
`.get(name)`

###### Description:
Returns a the cookie value.

###### Sample:
``` js
define(['cookie'], function(cookie) {
	cookie.get('cookie-name');
});
```

#### set
`.set(name, value, days)`

###### Description:
Creates or rewrite a cookie value with a defined expiration time in days.

###### Sample:
``` js
define(['cookie'], function(cookie) {
	cookie.set('cookie-name', 'value', 1);
});
```


## License

Cookie-amd is released under the [BSD](https://github.com/elo7/cookie-amd/blob/master/LICENSE). Have at it.

* * *

Copyright :copyright: 2015 Elo7
