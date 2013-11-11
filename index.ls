{empty,lists-to-obj,replicate,map,head,tail,last,keys,compact,Obj,join,zip-with,and-list,values,difference} = require \prelude-ls

title = -> (head it)to-upper-case! ++ tail it
disp = Obj.map title, {\mon \tue \wed \thu \fri \sat \sun}
days = keys disp

is-weekdays = (arr)->
	empty difference <[ mon tue wed thu fri ]> arr
is-weekend = (arr)->
	empty difference <[ sat sun ]> arr

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
	| runs.length > 1 => join ', ' map semana, runs
	| otherwise =>
		run = head runs
		switch
		| run.length is 1 => (disp.) head run
		| is-weekdays run => "Weekdays"
		| is-weekend run  => "Weekends"
		| otherwise => "#{(disp.) head run} - #{(disp.) last run}"
