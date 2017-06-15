var library = (function() {
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	function doubleDigit(value) {
		if (value.length === 1) {
			value = '0' + value;
		}
		return value;
	}
function getOrdinal(value) {
	var suffix;
	var hundreds = value % 100;
	if (hundreds > 9 && hundreds < 21) {
		suffix = 'th';
		} else {
			var lastDigit = value % 10;
			if (lastDigit === 1) {
				suffix = 'st';
			} else if (lastDigit === 2) {
				suffix = 'nd';
				} else if (lastDigit === 3) {
					suffix = 'rd';
				} else {
				suffix = 'th';
		}
}
return value + suffix;
}
return {
		TimeStamp: (function() {
			return {
				UnixTimestamp: function () {
					var unixTimestampInSeconds = (new Date().getTime() / 1000);
					return Math.floor(unixTimestampInSeconds).toString();
				},
				UnixMillisecond: function () {
					return new Date().getTime().toString();
				}
			}
		})(),
		Local: (function () {
			return {
				Time: (function () {
					return {
						WithSeconds: function () { 
						return new Date().toLocaleTimeString();
						},
						WithOutSeconds: function() {
							var d = new Date();
							var hours = d.getHours();
							var ampm = 'AM'
							if (hours > 12) {
								ampm = 'PM'
							}
						hours %= 12; // Same as hours = hours % 12
						if (hours===0) {
							hours = 12;
						}
						var minutes = d.getMinutes();
						return hours + ':' + minutes + ' ' + ampm;
					}
					}
				})(),
				MDY: (function () {
					return {
						Numeral: function () { 
							var d = new Date();
							var month = d.getMonth() + 1;
							var day = d.getDate();
							var year = d.getFullYear();
							return month + '/' + day + '/' + year;
							},
						Name: function () {
							var d = new Date();
							var month = months[d.getMonth()];
							var day = d.getDate();
							var year = d.getFullYear();
							return month + ' ' + day + ', ' + year;
						 }
					}
				})(),
			}
		})(),
		Second: (function () {
			return {
				Second: function () {
					return new Date().getSeconds().toString();
				},
				DblDigit: function () {
					var second = this.Second();
					return doubleDigit(second);
				}
			}
		})(),
		Minute: (function () {
			return {
				Minute: function () {
					return new Date().getMinutes().toString();
				},

				DblDigit: function () {
					return doubleDigit(this.Minute());
				 }
			}
		})(),
		Hour: (function () {
			return {
				TwentyFourHour: function () {
					return new Date().getHours().toString();
				},
				TwelveHour: function () {
					var hours = new Date().getHours();
					hours %= 12; // Same as hours = hours % 12;
					if (hours === 0) {
						hours = 12;
					}
					return hours.toString();
				},

				AMPM: (function () {
					return {
						UpperCase: function () {
							var hours = new Date().getHours();
							if (hours > 11) {
								return 'PM';
							}
							return 'AM';
						},
						LowerCase: function () {
							var hours = new Date().getHours();
							return (hours > 11) ? 'pm' : 'am';
							}
					}
				})()
			}
		})(),
		Week: (function () {
			return {
				DayOfWeek: function () { 
					var d = new Date();
					var day = days[d.getDay()];
					return day;
				},
				AbrDayOfWeek: function () { 
					var day = this.DayOfWeek();
					return day.substr(0, 3)
				},
				FirstTwoOfWeek: function () {
					},
				WeekOfYear: function () {}
			}
		})(),
		Month: (function () {  // looking for 14 here
			return {
				DateOfMonth: (function() {
					return {
						Numeral: function () {
							return String(new Date().getDate());
						},
						Ordinal: function() {
							var d = new Date
							//return getOrdinal(d.getDate())
							return getOrdinal(d.getDate())
						 },
						DateDblDigit: function() {
							var date = this.Numeral();
							return doubleDigit(date);
							}
						}
				})(),
				MonthNumber: function() {
					var d = new Date()
					return String(d.getMonth() + 1);
				},

				MonthNumberDblDigit: function() {
					var monthInTwoDigists = this.MonthInTwoDigists();
					return doubleDigit(monthInTwoDigists);
					},
				AbrOfCurrentMonth: function () {
					return monthAbbreviations[new Date().getMonth()];
				},
				CurrentMonth: function () {
				return months[new Date().getMonth()];
				}
			}
		})(),
		Year: (function () {
			return {
				DayOfYear: (function() {
					return {
						Numeral: function () { },
						Ordinal: function () { }
					}
				})(),
				YearFull: function() {
					return new Date().getFullYear().toString();
				},
				YearAbr: function() {
					var year = this.YearFull();
					return year.substr(-2);
				}
			}
		})(),
		Defaults: function() { }
	}
})();