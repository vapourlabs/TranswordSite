/* Coded by James Walston, Some rights are reserved.
Allowed to distribute with authorized textual permi-
ssion. Failure to comply to this will lose legitimacy
of this script IP. */

var html_shell;
var spec_time;

window.onload = function() {
  html_shell = document.getElementById('countdown-timer');
  spec_time = new Date('Dec 12, 2018 00:00:00').getTime();

  UPDATE();
  setInterval(UPDATE, 1000);
}

var UPDATE = function() {
  cur_time = new Date().getTime();
  est_time = spec_time - cur_time;

  monthint  = 2678400000;
  dayint    = 86400000;
  hourint   = 3600000;
  minuteint = 60000;
  secondint = 1000;

  month = Math.floor(est_time / monthint);
  month_modus = Math.floor(est_time % monthint);

  day = Math.floor(month_modus / dayint);
  day_modus = Math.floor(est_time % dayint);

  hour = Math.floor(day_modus / hourint);
  hour_modus = Math.floor(est_time % hourint);

  minute = Math.floor(hour_modus / minuteint);
  minute_modus = Math.floor(est_time % minuteint);

  second = Math.floor(minute_modus / secondint);

  if(month < 10) {
    month = '0' + month;
  }

  if(day < 10) {
    day = '0' + day;
  }

  if(hour < 10) {
    hour = '0' + hour;
  }

  if(minute < 10) {
    minute = '0' + minute;
  }

  if(second < 10) {
    second = '0' + second;
  }

  html_shell.innerHTML = '<h4> '
  + month + ':'
  + day + ':'
  + hour + ':'
  + minute + ':'
  + second + ' </h4>';
}
