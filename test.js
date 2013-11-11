var assert = require('better-assert'),
getDaysString = require('./index.js');

// single days should just print the day
assert("Mon" === getDaysString({mon: true}));
assert("Tue" === getDaysString({tue: true}));
assert("Wed" === getDaysString({wed: true}));
assert("Thu" === getDaysString({thu: true}));
assert("Fri" === getDaysString({fri: true}));
assert("Sat" === getDaysString({sat: true}));
assert("Sun" === getDaysString({sun: true}));

// runs should be hyphen'd
assert("Mon - Wed" === getDaysString({mon: true, tue: true, wed: true}));
assert("Wed - Thu" === getDaysString({wed: true, thu: true}));

// but not across week boundaries
assert("Mon, Sun" === getDaysString({mon: true, sun: true}));

// weekdays, weekends
assert("Weekdays" === getDaysString({mon: true, tue: true, wed: true, thu: true, fri: true}));
assert("Weekends" === getDaysString({sat: true, sun: true}));

// disjoint runs should be comma'd
assert("Mon, Thu, Sat" === getDaysString({mon: true, thu: true, sat: true}));
assert("Mon, Thu - Fri" === getDaysString({mon: true, thu: true, fri: true}));
assert("Mon - Wed, Sat" === getDaysString({mon: true, tue: true, wed: true, sat: true}));
assert("Mon - Wed, Weekends" === getDaysString({mon: true, tue: true, wed: true, sat: true, sun: true}));
