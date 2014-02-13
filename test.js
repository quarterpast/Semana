var assert = require('better-assert'),
getDaysString = require('./index.js');

// single days should just print the day
assert("Mon" === getDaysString(['mon']));
assert("Tue" === getDaysString(['tue']));
assert("Wed" === getDaysString(['wed']));
assert("Thu" === getDaysString(['thu']));
assert("Fri" === getDaysString(['fri']));
assert("Sat" === getDaysString(['sat']));
assert("Sun" === getDaysString(['sun']));

// runs should be hyphen'd
assert("Mon - Wed" === getDaysString(['mon', 'tue', 'wed']));
assert("Wed - Thu" === getDaysString(['wed', 'thu']));

// but not across week boundaries
assert("Mon, Sun" === getDaysString(['mon', 'sun']));

// weekdays, weekends, every day
assert("Weekdays" === getDaysString(['mon', 'tue', 'wed', 'thu', 'fri']));
//assert("Weekdays, Sat" === getDaysString(['mon', 'tue', 'wed', 'thu', 'fri', 'sat']));
assert("Weekdays, Sun" === getDaysString(['mon', 'tue', 'wed', 'thu', 'fri', 'sun']));
assert("Weekends" === getDaysString(['sat', 'sun']));
assert("Every day" === getDaysString(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']));

// disjoint runs should be comma'd
assert("Mon, Thu, Sat" === getDaysString(['mon', 'thu', 'sat']));
assert("Mon, Thu - Fri" === getDaysString(['mon', 'thu', 'fri']));
assert("Mon - Wed, Sat" === getDaysString(['mon', 'tue', 'wed', 'sat']));
assert("Mon - Wed, Weekends" === getDaysString(['mon', 'tue', 'wed', 'sat', 'sun']));

// empty
assert("" === getDaysString([]));