Semana [![](https://api.travis-ci.org/quarterto/Semana.png)](https://travis-ci.org/quarterto/Semana)
=====
weekday formatter

Installation
------------

Semana is available via npm and Bower:

```
npm install semana
```
```
bower install semana
```
Usage
-----
```javascript
var semana = require('semana');
semana(['mon', 'wed', 'fri']) //=> "Mon, Wed, Fri"
semana(['mon', 'tue', 'wed']) //=> "Mon - Wed"
semana(['sat', 'sun']) //=> "Weekends"
```

i18n
----
### `semana.lang(strings)`
Returns a version of `semana` that uses strings from the `strings` hash. See [en.json](/en.json) for the keys.

The exported `semana` is equivalent to `semana.lang(require('semana/en.json'))`.

Licence
-------
MIT.
