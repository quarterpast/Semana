_ = require \underscore
days = [\mon \tue \wed \thu \fri \sat \sun]

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

semana-base = (strings,wkdays)-->
	runs = split-runs wkdays
	switch
	| _.is-empty runs => ""
	| runs.length > 1 => _.map runs, (semana-base strings) .join ', '
	| otherwise =>
		run = _.head runs
		switch
		| run.length is 1 => strings[_.head run]
		| is-everyday run => strings.everyday
		| is-weekdays run => strings.weekdays
		| is-weekend run  => strings.weekend
		| otherwise => "#{strings[_.head run]} - #{strings[_.last run]}"

semana = semana-base require './en.json'
semana.lang = semana-base
module.exports = semana