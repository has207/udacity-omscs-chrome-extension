// Keep polling to check if still signed in and pop up an alert
// and redirect to the login page if login expires.
if (document.cookie.search('idp.gatech.edu') > 0) {
  var welcome = '/georgia-tech/welcome';
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
    xhr.open('GET', welcome, true);
    xhr.onload = function() {
      if (this.responseText.search(message) > 0) {
        alert('You have been logged out of Udacity');
        window.location = welcome;
      }
      lastTimestamp = Date.now();
    };
    xhr.send();
  }, 30 * 1000);
}
