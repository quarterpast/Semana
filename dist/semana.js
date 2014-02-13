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
                var title, days, disp, isEveryday, isWeekdays, isWeekend, splitRuns, semana;
                ;
                title = function (it) {
                    return it[0].toUpperCase().concat(it.slice(1));
                };
                days = [
                    'mon',
                    'tue',
                    'wed',
                    'thu',
                    'fri',
                    'sat',
                    'sun'
                ];
                disp = _.object(days, _.map({
                    'mon': 'mon',
                    'tue': 'tue',
                    'wed': 'wed',
                    'thu': 'thu',
                    'fri': 'fri',
                    'sat': 'sat',
                    'sun': 'sun'
                }, title));
                isEveryday = function (arr) {
                    return _.isEmpty(_.difference([
                        'mon',
                        'tue',
                        'wed',
                        'thu',
                        'fri',
                        'sat',
                        'sun'
                    ], arr));
                };
                isWeekdays = function (arr) {
                    return _.isEmpty(_.difference([
                        'mon',
                        'tue',
                        'wed',
                        'thu',
                        'fri'
                    ], arr));
                };
                isWeekend = function (arr) {
                    return _.isEmpty(_.difference([
                        'sat',
                        'sun'
                    ], arr));
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
                module.exports = semana = function (wkdays) {
                    var runs, run;
                    runs = splitRuns(wkdays);
                    switch (false) {
                    case !_.isEmpty(runs):
                        return '';
                    case !(runs.length > 1):
                        return _.map(runs, semana).join(', ');
                    default:
                        run = _.head(runs);
                        switch (false) {
                        case run.length !== 1:
                            return function (it) {
                                return disp[it];
                            }(_.head(run));
                        case !isEveryday(run):
                            return 'Every day';
                        case !isWeekdays(run):
                            return 'Weekdays';
                        case !isWeekend(run):
                            return 'Weekends';
                        default:
                            return function (it) {
                                return disp[it];
                            }(_.head(run)) + ' - ' + function (it) {
                                return disp[it];
                            }(_.last(run));
                        }
                    }
                };
                function in$(x, xs) {
                    var i = -1, l = xs.length >>> 0;
                    while (++i < l)
                        if (x === xs[i])
                            return true;
                    return false;
                }
            },
            {}
        ]
    }, {}, [1])(1);
})