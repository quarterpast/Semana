# {lists-to-obj,replicate,_.map,_.head,_.tail,_.last,_.keys,compact,Obj,join,zip-with,and-list,values} = prelude

_ = require \lodash

title = -> (_.head it)to-upper-case! ++ _.tail it
disp = _.map {\mon \tue \wed \thu \fri \sat \sun}, title
days = _.keys disp

mkdays = (days)->
	_.zip-object days, (_map days, ->true)

is-weekdays = (obj)->
	obj.mon and obj.tue and obj.wed and obj.thu and obj.fri and not obj.sat and not obj.sun
is-weekend = (obj)->
	not obj.mon and not obj.tue and not obj.wed and not obj.thu and not obj.fri and obj.sat and obj.sun

unmkdays = (days)-> _.keys _.filter days

split-runs = (wkdays)->
	out = []
	counter = 0
	for day in days
		if wkdays[day]
			out[][counter].push day
		else if out[counter]
			counter++
	_.map out, mkdays

module.exports = semana = (wkdays)->
	runs = split-runs wkdays
	switch
	| runs.length > 1 => join ', ' _.map runs, semana
	| otherwise =>
		run = unmkdays _.head runs
		switch
		| run.length is 1 => (disp.) _.head run
		| is-weekdays _.head runs => "Weekdays"
		| is-weekend _.head runs  => "Weekends"
		| otherwise => "#{(disp.) _.head run} - #{(disp.) _.last run}"

console.log unmkdays {+mon}