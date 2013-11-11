Semana
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
Licence
-------
MIT.
