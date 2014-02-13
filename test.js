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

// can create a new lanugage context
var semanaEs = semana.lang({
	mon: 'Lu',
	tue: 'Ma',
	wed: 'Mx',
	thu: 'Ju',
	fri: 'Vi',
	sat: 'Sa',
	sun: 'Do',
	everyday: 'Cada día',
	weekdays: 'Días de semana',
	weekend: 'Fin de semana'
});

// single days should just print the day
assert("Lu" === semanaEs(['mon']));
assert("Ma" === semanaEs(['tue']));
assert("Mx" === semanaEs(['wed']));
assert("Ju" === semanaEs(['thu']));
assert("Vi" === semanaEs(['fri']));
assert("Sa" === semanaEs(['sat']));
assert("Do" === semanaEs(['sun']));

// runs should be hyphen'd
assert("Lu - Mx" === semanaEs(['mon', 'tue', 'wed']));
assert("Mx - Ju" === semanaEs(['wed', 'thu']));

// but not across week boundaries
assert("Lu, Do" === semanaEs(['mon', 'sun']));

// weekdays, weekends, every day
assert("Días de semana" === semanaEs(['mon', 'tue', 'wed', 'thu', 'fri']));
assert("Lu - Sa" === semanaEs(['mon', 'tue', 'wed', 'thu', 'fri', 'sat']));
assert("Días de semana, Do" === semanaEs(['mon', 'tue', 'wed', 'thu', 'fri', 'sun']));
assert("Fin de semana" === semanaEs(['sat', 'sun']));
assert("Cada día" === semanaEs(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']));

// disjoint runs should be comma'd
assert("Lu, Ju, Sa" === semanaEs(['mon', 'thu', 'sat']));
assert("Lu, Ju - Vi" === semanaEs(['mon', 'thu', 'fri']));
assert("Lu - Mx, Sa" === semanaEs(['mon', 'tue', 'wed', 'sat']));
assert("Lu - Mx, Fin de semana" === semanaEs(['mon', 'tue', 'wed', 'sat', 'sun']));

// empty
assert("" === semanaEs([]));