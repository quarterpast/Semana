var assert = require('better-assert'),
semana = require('./dist/semana.js');

// single days should just print the day
assert("Mon" === semana(['mon']));
assert("Tue" === semana(['tue']));
assert("Wed" === semana(['wed']));
assert("Thu" === semana(['thu']));
assert("Fri" === semana(['fri']));
assert("Sat" === semana(['sat']));
assert("Sun" === semana(['sun']));

// runs should be hyphen'd
assert("Mon - Wed" === semana(['mon', 'tue', 'wed']));
assert("Wed - Thu" === semana(['wed', 'thu']));

// but not across week boundaries
assert("Mon, Sun" === semana(['mon', 'sun']));

// weekdays, weekends, every day
assert("Weekdays" === semana(['mon', 'tue', 'wed', 'thu', 'fri']));
assert("Mon - Sat" === semana(['mon', 'tue', 'wed', 'thu', 'fri', 'sat']));
assert("Weekdays, Sun" === semana(['mon', 'tue', 'wed', 'thu', 'fri', 'sun']));
assert("Weekends" === semana(['sat', 'sun']));
assert("Every day" === semana(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']));

// disjoint runs should be comma'd
assert("Mon, Thu, Sat" === semana(['mon', 'thu', 'sat']));
assert("Mon, Thu - Fri" === semana(['mon', 'thu', 'fri']));
assert("Mon - Wed, Sat" === semana(['mon', 'tue', 'wed', 'sat']));
assert("Mon - Wed, Weekends" === semana(['mon', 'tue', 'wed', 'sat', 'sun']));

// empty
assert("" === semana([]));

