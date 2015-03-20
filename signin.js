// Update signin page to show a big button to log into GATech
if (document.cookie.search('idp.gatech.edu') > 0) {
  var f = document.getElementsByClassName('form-box')[0];
  var d = document.createElement('a');
  d.href = '//web.iam.gatech.edu/udacity-login';
  d.id = 'gatech_signin';
  d.classList.add('btn');
  d.classList.add('btn-block');
  d.classList.add('btn-primary');
  var h2 = document.createElement('h2');
  h2.innerHTML = 'Login to Udacity with Georgia Tech';
  d.appendChild(h2);
  var e = document.createElement('div');
  e.innerHTML = '<br/><p align="center">- or -</p>';
  f.parentElement.insertBefore(e, f);
  f.parentElement.insertBefore(d, e);
}
