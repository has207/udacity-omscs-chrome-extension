// Keep polling to check if still signed in and pop up an alert
// and redirect to the login page if login expires.
var showWarning = function(warningId) {
  var warning = document.getElementById(warningId);
  if (warning == null) {
    var div = document.createElement('div');
    div.id = warningId;
    div.innerHTML = "!!!WARNING!!! Your session has expired. Click <a href='//web.iam.gatech.edu/udacity-login'>here</a> to log back in or risk losing work. !!!WARNING!!!";
    div.style['background-color'] = 'red';
    div.style['color'] = 'white';
    div.style['text-align'] = 'center';
    div.style['font-weight'] = 'bold';
    var nav = document.getElementsByClassName('left-hand-nav-title')[0];
    nav.parentElement.insertBefore(div, nav);
  }
};

var cleanupWarning = function(warningId) {
  var warning = document.getElementById(warningId);
  if (warning != null) {
    warning.parentElement.removeChild(warning);
  }
}

if (document.cookie.search('idp.gatech.edu') > 0) {
  var warningId = 'omscs-warning';
  var message = 'Login to Udacity with Georgia Tech';
  var lastTimestamp = Date.now();
  var period = 1000 * 60 * 10;  // 10min
  // poll every 30 seconds but only activate once every $period
  // ensures prompt firing after laptop wake without taxing Udacity
  // servers
  setInterval(function() {
    if (Date.now() < (lastTimestamp + period)) {
      return;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/georgia-tech/welcome', true);
    xhr.onload = function() {
      if (this.responseText.search(message) > 0) {
        showWarning(warningId);
      } else {
        cleanupWarning(warningId);
      }
      lastTimestamp = Date.now();
    };
    xhr.send();
  }, 30 * 1000);
}
