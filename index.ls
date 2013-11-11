{empty,lists-to-obj,replicate,map,head,tail,last,keys,compact,Obj,join,zip-with,and-list,values} = require \prelude-ls

title = -> (head it)to-upper-case! ++ tail it
disp = Obj.map title, {\mon \tue \wed \thu \fri \sat \sun}
days = keys disp

mkdays = (days)->
	lists-to-obj days, replicate days.length, true

is-weekdays = (obj)->
	obj.mon and obj.tue and obj.wed and obj.thu and obj.fri and not obj.sat and not obj.sun
is-weekend = (obj)->
	not obj.mon and not obj.tue and not obj.wed and not obj.thu and not obj.fri and obj.sat and obj.sun

unmkdays = keys . Obj.compact

split-runs = (wkdays)->
	out = []
	counter = 0
	for day in days
		if wkdays[day]
			out[][counter].push day
		else if out[counter]
			counter++
	map mkdays, out

module.exports = semana = (wkdays)->
	runs = split-runs wkdays
	switch
	| runs.length > 1 => join ', ' map semana, runs
	| otherwise =>
		run = unmkdays head runs
		switch
		| run.length is 1 => (disp.) head run
		| is-weekdays head runs => "Weekdays"
		| is-weekend head runs  => "Weekends"
		| otherwise => "#{(disp.) head run} - #{(disp.) last run}"
