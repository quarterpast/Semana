!function (definition) {
    return typeof exports === 'object' ? module.exports = definition(require('underscore')) : typeof define === 'function' && define.amd ? define(['underscore'], definition) : window.semana = definition(window._);
}(function (_) {
    return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == 'function' && require;
                    if (!u && a)
                        return a(o, !0);
                    if (i)
                        return i(o, !0);
                    throw new Error('Cannot find module \'' + o + '\'');
                }
                var f = n[o] = { exports: {} };
                t[o][0].call(f.exports, function (e) {
                    var n = t[o][1][e];
                    return s(n ? n : e);
                }, f, f.exports, e, t, n, r);
            }
            return n[o].exports;
        }
        var i = typeof require == 'function' && require;
        for (var o = 0; o < r.length; o++)
            s(r[o]);
        return s;
    }({
        1: [
            function (_dereq_, module, exports) {
                module.exports = {
                    'mon': 'Mon',
                    'tue': 'Tue',
                    'wed': 'Wed',
                    'thu': 'Thu',
                    'fri': 'Fri',
                    'sat': 'Sat',
                    'sun': 'Sun',
                    'everyday': 'Every day',
                    'weekdays': 'Weekdays',
                    'weekend': 'Weekends'
                };
            },
            {}
        ],
        2: [
            function (_dereq_, module, exports) {
                var days, sameElems, isEveryday, isWeekdays, isWeekend, splitRuns, semanaBase, semana, slice$ = [].slice;
                ;
                days = [
                    'mon',
                    'tue',
                    'wed',
                    'thu',
                    'fri',
                    'sat',
                    'sun'
                ];
                sameElems = function () {
                    var args;
                    args = slice$.call(arguments);
                    return _.all(args, function (it) {
                        return it.length === args[0].length;
                    }) && _.intersection.apply(_, args).length === args[0].length;
                };
                isEveryday = function (arr) {
                    return sameElems(arr, [
                        'mon',
                        'tue',
                        'wed',
                        'thu',
                        'fri',
                        'sat',
                        'sun'
                    ]);
                };
                isWeekdays = function (arr) {
                    return sameElems(arr, [
                        'mon',
                        'tue',
                        'wed',
                        'thu',
                        'fri'
                    ]);
                };
                isWeekend = function (arr) {
                    return sameElems(arr, [
                        'sat',
                        'sun'
                    ]);
                };
                splitRuns = function (wkdays) {
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
                semanaBase = curry$(function (strings, wkdays) {
                    var runs, run;
                    runs = splitRuns(wkdays);
                    switch (false) {
                    case !_.isEmpty(runs):
                        return '';
                    case !(runs.length > 1):
                        return _.map(runs, semanaBase(strings)).join(', ');
                    default:
                        run = _.head(runs);
                        switch (false) {
                        case run.length !== 1:
                            return strings[_.head(run)];
                        case !isEveryday(run):
                            return strings.everyday;
                        case !isWeekdays(run):
                            return strings.weekdays;
                        case !isWeekend(run):
                            return strings.weekend;
                        default:
                            return strings[_.head(run)] + ' - ' + strings[_.last(run)];
                        }
                    }
                });
                semana = semanaBase(_dereq_('./en.json'));
                semana.lang = semanaBase;
                module.exports = semana;
                function in$(x, xs) {
                    var i = -1, l = xs.length >>> 0;
                    while (++i < l)
                        if (x === xs[i])
                            return true;
                    return false;
                }
                function curry$(f, bound) {
                    var context, _curry = function (args) {
                            return f.length > 1 ? function () {
                                var params = args ? args.concat() : [];
                                context = bound ? context || this : this;
                                return params.push.apply(params, arguments) < f.length && arguments.length ? _curry.call(context, params) : f.apply(context, params);
                            } : f;
                        };
                    return _curry();
                }
            },
            { './en.json': 1 }
        ]
    }, {}, [2])(2);
})