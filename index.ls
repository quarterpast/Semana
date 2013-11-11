_ <- (definition) ->
	| typeof define is \function and define.amd? => define [\lodash] definition
	| typeof exports is \object => module.exports = definition require \lodash
	| otherwise => @semana = definition _

title = -> it.0.to-upper-case! ++ it.slice 1
days = [\mon \tue \wed \thu \fri \sat \sun]
disp = _.zip-object days, _.map {\mon \tue \wed \thu \fri \sat \sun}, title

is-weekdays = (arr)->
	_.is-empty _.difference <[ mon tue wed thu fri ]> arr
is-weekend = (arr)->
	_.is-empty _.difference <[ sat sun ]> arr

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
	| runs.length > 1 => _.map runs, semana .join ', '
	| otherwise =>
		run = _.head runs
		switch
		| run.length is 1 => (disp.) _.head run
		| is-weekdays run => "Weekdays"
		| is-weekend run  => "Weekends"
		| otherwise => "#{(disp.) _.head run} - #{(disp.) _.last run}"
