// Replace the crappy login link with a big ass button
var replaceLink = function(f) {
  var d = document.createElement('a');
  d.href = '//web.iam.gatech.edu/udacity-login';
  d.id = 'gatech_signin';
  d.classList.add('btn');
  d.classList.add('btn-block');
  d.classList.add('btn-primary');
  var h2 = document.createElement('h2');
  h2.innerHTML = 'Login to Udacity with Georgia Tech';
  d.appendChild(h2);
  f.parentElement.parentElement.replaceChild(d, f.parentElement);
}

if (document.cookie.search('idp.gatech.edu') > 0) {
  var h2 = document.getElementsByTagName('h2')[0];
  if (h2.nextElementSibling.innerHTML.search('not logged in') > 0) {
    replaceLink(h2);
  }
}
