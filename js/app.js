var daysTxt = document.getElementById('days');
var hoursTxt = document.getElementById('hours');
var minutesTxt = document.getElementById('minutes');
var secondsTxt = document.getElementById('seconds');
var txt = document.getElementById('summary');
var period = document.getElementById('all');
var name = "Имя";
var lastMeeting = new Date(2016, 6, 6, 18, 20);
var firstMeeting = new Date(2014, 11, 31);

function getMonthTitle(nmonth) {
  var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'декабря'];
  return months[nmonth];
}

function calculatePeriod() {

	daysTxt.textContent = getDays() + " " + getDayTitle(getDays()) + " прошло с того момента как в последний раз тебя видел";
	hoursTxt.textContent = getHours() + " " + getHourTitle(getHours()) +" я думаю о тебе с той встречи";
	minutesTxt.textContent = getMinutes() + " " + getMinuteTitle(getMinutes()) +" пролетело с " + lastMeeting.getDate() + " " + getMonthTitle(lastMeeting.getMonth()) + " и как я тоскую за тобой";
	secondsTxt.textContent = getSeconds() + " " + getSecondTitle(getSeconds()) +" скучаю за тобой после последней встречи";
	txt.textContent = "Как же мне не хватает тебя, " + name + "!";
	setStartDate(firstMeeting);
	period.textContent = "И чтоб ты знала, прошло " + getDays() + " " + getDayTitle(getDays()) + " с момента, когда появились в жизнях друг друга";
	setStartDate(lastMeeting);
	
}

setStartDate(lastMeeting);
calculatePeriod();
setInterval(calculatePeriod, 1000);