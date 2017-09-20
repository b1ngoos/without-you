var daysTxt = document.getElementById('days');
var hoursTxt = document.getElementById('hours');
var minutesTxt = document.getElementById('minutes');
var secondsTxt = document.getElementById('seconds');
var txt = document.getElementById('summary');
var period = document.getElementById('all');
var name = "Олюша";
var lastMeeting = new Date(2016, 8, 14, 20, 0);
var firstMeeting = new Date(2014, 0, 29);

function getMonthTitle(nMonth) {
  var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'декабря'];
  return months[nMonth];
}

function calculatePeriod() {

	daysTxt.textContent = getDays() + " " + getDayTitle(getDays()) + " прошел с того момента как в последний раз тебя видел";
	hoursTxt.textContent = getHours() + " " + getHourTitle(getHours()) +" я думаю о тебе с той встречи";
	minutesTxt.textContent = getMinutes() + " " + getMinuteTitle(getMinutes()) +" пролетело с " + lastMeeting.getDate() + " " + getMonthTitle(lastMeeting.getMonth()) + " и как я тоскую за тобой";
	secondsTxt.textContent = getSeconds() + " " + getSecondTitle(getSeconds()) +" скучаю за тобой после последней встречи";
	txt.textContent = "Как же мне не хватает тебя, " + name + "!";
	setStartDate(firstMeeting);
	period.textContent = "И чтоб ты знала, прошло " + getDays() + " " + getDayTitle(getDays()) + " с момента, когда появились в жизнях друг друга";
	setStartDate(lastMeeting);
	
}

function anchorHref(){
    var anchor=$(this);
    $("html, body").animate({
        scrollTop: $(anchor.attr("href")).offset().top
    }, 1500);
}

setStartDate(lastMeeting);
calculatePeriod();
setInterval(calculatePeriod, 1000);
$("a[href*='#']").click(anchorHref);