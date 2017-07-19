var startDate;
var howMany;

function setStartDate(date) {
    startDate = date;
}

function update()
{
    howMany = (new Date()).getTime() - startDate.getTime();
}

function getDays()
{
    update();
    return Math.round(howMany / (1000 * 60 * 60 * 24));
}

function getHours()
{
    update();
    return Math.round(howMany / (1000 * 60 * 60));
}

function getMinutes()
{
    update();
    return Math.round(howMany / (1000 * 60));
}

function getSeconds()
{
    update();
    return Math.round(howMany / 1000);
}

function getDayTitle(days)
{
    var div_days = days;

    if(days > 100) {
        div_days = getHundredthPart(days);
    } else {
        div_days = getTenthPart(days);
    }

    if(div_days > 4 & div_days < 21) {
        return "дней";
    } else {
        div_days = getTenthPart(div_days);
    }

    switch (div_days)
    {
        case 2:
        case 3:
        case 4: return "дня";
        case 1: return "день";
        default: return "дней";
    }
}

function getAnotherDayTitle(days)
{
    var div_days = days;

    if(days > 100) {
        div_days = getHundredthPart(days);
    } else {
        div_days = getTenthPart(days);
    }

    if(div_days > 4 & div_days < 21) {
        return "дней";
    } else {
        div_days = getTenthPart(div_days);
    }

    switch (div_days)
    {
        case 2:
        case 3:
        case 4: return "дня";
        case 1: return "день";
        default: return "дней";
    }
}

function getHourTitle(hours)
{
    var div_hours = hours;

    if(hours > 100) {
        div_hours = getHundredthPart(hours);
    } else {
        div_hours = getTenthPart(hours);
    }

    if(div_hours > 4 & div_hours < 21) {
        return "часов";
    } else {
        div_hours = getTenthPart(div_hours);
    }

    switch (div_hours)
    {
        case 2:
        case 3:
        case 4: return "часа";
        case 1: return "час";
        default: return "часов";
    }
}

function getMinuteTitle(minutes)
{
    var div_minutes = minutes;

    if(minutes > 100) {
        div_minutes = getHundredthPart(minutes);
    } else {
        div_minutes = getTenthPart(minutes);
    }

    if(div_minutes > 4 & div_minutes < 21) {
        return "минут";
    } else {
        div_minutes = getTenthPart(div_minutes);
    }

    switch (div_minutes)
    {
        case 2:
        case 3:
        case 4: return "минуты";
        case 1: return "минуту";
        default: return "минут";
    }
}

function getSecondTitle(seconds)
{
    var div_second = seconds;

    if(seconds > 100) {
        div_second = getHundredthPart(seconds);
    } else {
            div_second = getTenthPart(seconds);
    }

    if(div_second > 4 & div_second < 21) {
        return "секунд";
    } else {
        div_second = getTenthPart(div_second);
    }

    switch (div_second)
    {
        case 2:
        case 3:
        case 4: return "секунды";
        case 1: return "секунду";
        default: return "секунд";
    }
}

function getHundredthPart(num){
    temp = (num / 100 - Math.round(num / 100)) * 100;
    return Math.round(temp);
}

function getTenthPart(num){
    temp = (num / 10 - Math.round(num / 10)) * 10;
    return Math.round(temp);
}