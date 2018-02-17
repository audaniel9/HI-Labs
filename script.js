function submitInfoForm() {
    document.getElementById("infoForm").submit();
}

function changeTheme() {
  var create = document.getElementById("createAccountBox");
  var signin = document.getElementById("signinAccountBox");
  var personal = document.getElementById("personalInfo");
  var device = document.getElementById("deviceInfo");

  if(create.className !== 'themeStyleAccount' && signin.className !== 'themeStyleAccount' &&
      personal.className !== 'themeStyleInfo' && device.className !== 'themeStyleInfo') {
    create.className = 'themeStyleAccount';
    signin.className = 'themeStyleAccount';
    personal.className = 'themeStyleInfo';
    device.className = 'themeStyleInfo';
  }
  else {
    create.className = 'accountArea';
    signin.className = 'accountArea';
    personal.className = 'formArea';
    device.className = 'formArea';
  }
}
