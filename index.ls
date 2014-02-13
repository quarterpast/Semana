_ = require \underscore

title = -> it.0.to-upper-case! ++ it.slice 1
days = [\mon \tue \wed \thu \fri \sat \sun]
disp = _.object days, _.map {\mon \tue \wed \thu \fri \sat \sun}, title

same-elems = (...args)->
	_.all args, (.length is args.0.length)
	and (_.intersection ...args).length is args.0.length

is-everyday = (arr)->
	same-elems arr, <[ mon tue wed thu fri sat sun ]>
is-weekdays = (arr)->
	same-elems arr, <[ mon tue wed thu fri ]>
is-weekend = (arr)->
	same-elems arr, <[ sat sun ]>

split-runs = (wkdays)->
	out = []
	counter = 0
	for day in days
		if day in wkdays
			out[][counter].push day
		else if out[counter]
			counter++
	out

module.exports = semana = (wkdays)->
	runs = split-runs wkdays
	switch
	| _.is-empty runs => ""
	| runs.length > 1 => _.map runs, semana .join ', '
	| otherwise =>
		run = _.head runs
		switch
		| run.length is 1 => disp[_.head run]
		| is-everyday run => "Every day"
		| is-weekdays run => "Weekdays"
		| is-weekend run  => "Weekends"
		| otherwise => "#{disp[_.head run]} - #{disp[_.last run]}"
