!function (definition) {
    return typeof exports === 'object' ? module.exports = definition() : typeof define === 'function' && define.amd ? define([], definition) : window.semana = definition();
}(function () {
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
                (function () {
                    var slice$ = [].slice;
                    (function (definition) {
                        switch (false) {
                        case !(typeof define === 'function' && define.amd != null):
                            return define(['underscore'], definition);
                        case typeof exports !== 'object':
                            return module.exports = definition(_dereq_('underscore'));
                        default:
                            return this.semana = partialize$.apply(this, [
                                definition,
                                [void 8],
                                [0]
                            ]);
                        }
                    }(function (_) {
                        var title, days, disp, isEveryday, isWeekdays, isWeekend, splitRuns, semana;
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
                        return semana = function (wkdays) {
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
                    }));
                    function partialize$(f, args, where) {
                        var context = this;
                        return function () {
                            var params = slice$.call(arguments), i, len = params.length, wlen = where.length, ta = args ? args.concat() : [], tw = where ? where.concat() : [];
                            for (i = 0; i < len; ++i) {
                                ta[tw[0]] = params[i];
                                tw.shift();
                            }
                            return len < wlen && len ? partialize$.apply(context, [
                                f,
                                ta,
                                tw
                            ]) : f.apply(context, ta);
                        };
                    }
                    function in$(x, xs) {
                        var i = -1, l = xs.length >>> 0;
                        while (++i < l)
                            if (x === xs[i])
                                return true;
                        return false;
                    }
                }.call(this));
            },
            {}
        ]
    }, {}, [1])(1);
})