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
semana({mon: true, wed: true, fri: true}) //=> "Mon, Wed, Fri"
semana({mon: true, tue: true, wed: true}) //=> "Mon - Wed"
semana({sat: true, sun: true}) //=> "Weekends"
```
Licence
-------
MIT.
