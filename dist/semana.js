!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.semana=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports={
	"mon": "Mon",
	"tue": "Tue",
	"wed": "Wed",
	"thu": "Thu",
	"fri": "Fri",
	"sat": "Sat",
	"sun": "Sun",
	"everyday": "Every day",
	"weekdays": "Weekdays",
	"weekend": "Weekends"
}
},{}],2:[function(_dereq_,module,exports){
var days, empty, map, sameElems, last, isEveryday, isWeekdays, isWeekend, splitRuns, semanaBase, semana, slice$ = [].slice;
days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
empty = function(it){
  return it.length === 0;
};
map = curry$(function(f, list){
  var x, xs;
  x = list[0], xs = slice$.call(list, 1);
  switch (false) {
  case !empty(list):
    return [];
  default:
    return [f(x)].concat(map(f, xs));
  }
});
sameElems = curry$(function(xxs, yys){
  var x, xs, y, ys;
  x = xxs[0], xs = slice$.call(xxs, 1);
  y = yys[0], ys = slice$.call(yys, 1);
  switch (false) {
  case !(empty(xxs) && empty(yys)):
    return true;
  case !(empty(xxs) || empty(yys)):
    return false;
  default:
    return x === y && sameElems(xs, ys);
  }
});
last = function(it){
  return it[it.length - 1];
};
isEveryday = sameElems(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']);
isWeekdays = sameElems(['mon', 'tue', 'wed', 'thu', 'fri']);
isWeekend = sameElems(['sat', 'sun']);
splitRuns = function(wkdays){
  var out, counter, i$, ref$, len$, day;
  out = [];
  counter = 0;
  for (i$ = 0, len$ = (ref$ = days).length; i$ < len$; ++i$) {
    day = ref$[i$];
    if (in$(day, wkdays)) {
      (out[counter] || (out[counter] = [])).push(day);
    } else if (out[counter]) {
      counter++;
    }
  }
  return out;
};
semanaBase = curry$(function(strings, wkdays){
  var runs, run;
  runs = splitRuns(wkdays);
  switch (false) {
  case !empty(runs):
    return "";
  case !(runs.length > 1):
    return map(semanaBase(strings), runs).join(', ');
  default:
    run = runs[0];
    switch (false) {
    case run.length !== 1:
      return strings[run[0]];
    case !isEveryday(run):
      return strings.everyday;
    case !isWeekdays(run):
      return strings.weekdays;
    case !isWeekend(run):
      return strings.weekend;
    default:
      return strings[run[0]] + " - " + strings[last(run)];
    }
  }
});
semana = semanaBase(_dereq_('./en.json'));
semana.lang = semanaBase;
module.exports = semana;
function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}
function in$(x, xs){
  var i = -1, l = xs.length >>> 0;
  while (++i < l) if (x === xs[i]) return true;
  return false;
}
},{"./en.json":1}]},{},[2])(2)
});
