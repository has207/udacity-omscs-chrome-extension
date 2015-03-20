// Keep polling to check if still signed in and pop up an alert
// and redirect to the login page if login expires.
if (document.cookie.search('idp.gatech.edu') > 0) {
  var welcome = '/georgia-tech/welcome';
  var message = 'Login to Udacity with Georgia Tech';
  var period = 1000 * 60 * 10;  // 10min
  console.log('gatech');
  setInterval(function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', welcome, true);
    xhr.onload = function() {
      if (window.location.pathname != welcome && this.responseText.search(message) > 0) {
        alert('You have been logged out of Udacity');
        window.location = welcome;
      }
    };
    xhr.send();
  }, period);
}
