days = [\mon \tue \wed \thu \fri \sat \sun]

empty = (.length is 0)

map = (f, [x, ...xs]:list)-->
	| empty list => []
	| otherwise  => [f x] ++ map f, xs

same-elems = ([x, ...xs]:xxs, [y, ...ys]:yys)-->
	| empty xxs and empty yys => true
	| empty xxs or  empty yys => false
	| otherwise => x is y and xs `same-elems` ys

last = (.[it.length - 1])

is-everyday = same-elems <[ mon tue wed thu fri sat sun ]>
is-weekdays = same-elems <[ mon tue wed thu fri ]>
is-weekend  = same-elems <[ sat sun ]>

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
	| empty runs => ""
	| runs.length > 1 => map (semana-base strings), runs .join ', '
	| otherwise =>
		run = runs.0
		switch
		| run.length is 1 => strings[run.0]
		| is-everyday run => strings.everyday
		| is-weekdays run => strings.weekdays
		| is-weekend run  => strings.weekend
		| otherwise => "#{strings[run.0]} - #{strings[last run]}"

semana = semana-base require './en.json'
semana.lang = semana-base
module.exports = semana
