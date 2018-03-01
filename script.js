function submitInfoForm() {
    document.getElementById("infoForm").submit();
}

function changeTheme() {
  var create = document.getElementById("createAccountBox");
  var signin = document.getElementById("signinAccountBox");
  var personal = document.getElementById("personalInfo");
  var device = document.getElementById("deviceInfo");
  var service = document.getElementById("servicesInfo");
  var surveyQ = document.getElementById("surveyInfo");

  if(create.className !== "formArea formAreaAccount themeStyleAccount" &&
    signin.className !== "formArea formAreaAccount themeStyleAccount" &&
    personal.className !== "formArea themeStyleInfo" &&
    device.className !== "formArea themeStyleInfo" &&
    service.className !== "formArea themeStyleInfo" &&
    surveyQ.className !== "formArea themeStyleInfo") {

    create.className = "formArea formAreaAccount themeStyleAccount";
    signin.className = "formArea formAreaAccount themeStyleAccount";
    personal.className = "formArea themeStyleInfo";
    device.className = "formArea themeStyleInfo";
    service.className = "formArea themeStyleInfo";
    surveyQ.className = "formArea themeStyleInfo";
  }
  else {
    create.className = "formArea formAreaAccount";
    signin.className = "formArea formAreaAccount";
    personal.className = "formArea";
    device.className = "formArea";
    service.className = "formArea";
    surveyQ.className = "formArea";
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
  document.getElementById("survey").innerHTML = "Encuesta";
}

function getLocation() {
  var loc = document.getElementById("location");
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
		else {
        loc.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
		document.getElementById("location").innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

function googleMap() {
  var mapOptions = {
      center: new google.maps.LatLng(40.759, -74.039),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("servicesRight"), mapOptions);
}

function updateSliderValue(val) {
  document.getElementById('sliderValue').value=val;
}
