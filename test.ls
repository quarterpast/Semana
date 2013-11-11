assert = require \better-assert
get-days-string = require \/.

# single days should just print the day
assert "Mon" is get-days-string {+mon}
assert "Tue" is get-days-string {+tue}
assert "Wed" is get-days-string {+wed}
assert "Thu" is get-days-string {+thu}
assert "Fri" is get-days-string {+fri}
assert "Sat" is get-days-string {+sat}
assert "Sun" is get-days-string {+sun}

# runs should be hyphen'd
assert "Mon - Wed" is get-days-string {+mon, +tue, +wed}
assert "Wed - Thu" is get-days-string {+wed, +thu}

# but not across week boundaries
assert "Mon, Sun" is get-days-string {+mon, +sun}

# disjoint runs should be comma'd
assert "Mon, Thu, Sat" is get-days-string {+mon, +thu, +sat}
assert "Mon, Thu - Fri" is get-days-string {+mon, +thu, +fri}
assert "Mon - Wed, Sat" is get-days-string {+mon, +tue, +wed, +sat}
assert "Mon - Wed, Weekends" is get-days-string {+mon, +tue, +wed, +sat, +sun}

# weekdays, weekends
assert "Weekdays" is get-days-string {+mon, +tue, +wed, +thu, +fri}
assert "Weekends" is get-days-string {+sat, +sun}