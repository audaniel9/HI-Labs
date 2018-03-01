function submitInfoForm() {
    document.getElementById("infoForm").submit();
}

function changeTheme() {
  var create = document.getElementById("createAccountBox");
  var signin = document.getElementById("signinAccountBox");
  var personal = document.getElementById("personalInfo");
  var device = document.getElementById("deviceInfo");
  var service = document.getElementById("servicesInfo");

  if(create.className !== "themeStyleAccount" && signin.className !== "themeStyleAccount" &&
      personal.className !== "themeStyleInfo" && device.className !== "themeStyleInfo" &&
      service.className !== "themeStyleInfo") {
    create.className = "themeStyleAccount";
    signin.className = "themeStyleAccount";
    personal.className = "themeStyleInfo";
    device.className = "themeStyleInfo";
    service.className = "themeStyleInfo";
  }
  else {
    create.className = "accountArea";
    signin.className = "accountArea";
    personal.className = "formArea";
    device.className = "formArea";
    service.className = "formArea";
  }
}

function menuDrop() {
  var visible = document.getElementById("langDrop");
  if(visible.style.display == "none") {
    visible.style.display = "flex";
  }
  else {
    visible.style.display = "none";
  }
}

function changeLang() {
  document.getElementById("createAnAccount").innerHTML = "Crea una Cuenta";
  document.getElementById("signIn").innerHTML = "Registrarse";
  document.getElementById("personalInformation").innerHTML = "Informacion Personal";
  document.getElementById("deviceInformation").innerHTML = "Información del Dispositivo";
  document.getElementById("services").innerHTML = "Servicios";
}

function updateSliderValue(val) {
          document.getElementById('sliderValue').value=val;
        }
