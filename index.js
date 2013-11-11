(function(){
  var slice$ = [].slice;
  (function(definition){
    switch (false) {
    case !(typeof define === 'function' && define.amd != null):
      return define(['lodash'], definition);
    case typeof exports !== 'object':
      return module.exports = definition(require('lodash'));
    default:
      return this.semana = partialize$.apply(this, [definition, [void 8], [0]]);
    }
  })(function(_){
    var title, days, disp, isEveryday, isWeekdays, isWeekend, splitRuns, semana;
    title = function(it){
      return it[0].toUpperCase().concat(it.slice(1));
    };
    days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    disp = _.zipObject(days, _.map({
      'mon': 'mon',
      'tue': 'tue',
      'wed': 'wed',
      'thu': 'thu',
      'fri': 'fri',
      'sat': 'sat',
      'sun': 'sun'
    }, title));
    isEveryday = function(arr){
      return _.isEmpty(_.difference(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'], arr));
    };
    isWeekdays = function(arr){
      return _.isEmpty(_.difference(['mon', 'tue', 'wed', 'thu', 'fri'], arr));
    };
    isWeekend = function(arr){
      return _.isEmpty(_.difference(['sat', 'sun'], arr));
    };
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
    return semana = function(wkdays){
      var runs, run;
      runs = splitRuns(wkdays);
      switch (false) {
      case !(runs.length > 1):
        return _.map(runs, semana).join(', ');
      default:
        run = _.head(runs);
        switch (false) {
        case run.length !== 1:
          return function(it){
            return disp[it];
          }(_.head(run));
        case !isEveryday(run):
          return "Every day";
        case !isWeekdays(run):
          return "Weekdays";
        case !isWeekend(run):
          return "Weekends";
        default:
          return function(it){
            return disp[it];
          }(_.head(run)) + " - " + function(it){
            return disp[it];
          }(_.last(run));
        }
      }
    };
  });
  function partialize$(f, args, where){
    var context = this;
    return function(){
      var params = slice$.call(arguments), i,
          len = params.length, wlen = where.length,
          ta = args ? args.concat() : [], tw = where ? where.concat() : [];
      for(i = 0; i < len; ++i) { ta[tw[0]] = params[i]; tw.shift(); }
      return len < wlen && len ?
        partialize$.apply(context, [f, ta, tw]) : f.apply(context, ta);
    };
  }
  function in$(x, xs){
    var i = -1, l = xs.length >>> 0;
    while (++i < l) if (x === xs[i]) return true;
    return false;
  }
}).call(this);
