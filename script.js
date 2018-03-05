function submitInfoForm() {
    document.getElementById("infoForm").submit();
}

function changeTheme(choice) {
  var divs = document.getElementsByClassName("formArea");
  var dark = document.getElementById("darkTheme");
  var beige = document.getElementById("beigeTheme");

  for(i=0; i<divs.length; i++) {
    switch(choice) {
      case dark:
        divs[i].classList.add("formAreaThemeDark");
        divs[i].classList.remove("formAreaThemeBeige");
        break;
      case beige:
        divs[i].classList.add("formAreaThemeBeige");
        divs[i].classList.remove("formAreaThemeDark");
        break;
      default:
        divs[i].classList.remove("formAreaThemeDark");
        divs[i].classList.remove("formAreaThemeBeige");
    }
  }
}

function menuDrop(btn) {
  btn.classList.toggle("sidebarItemHide");
}

function changeLang() {
  document.getElementById("header").innerHTML = "Forma de información";
  document.getElementById("techSupport").innerHTML = "APOYO TÉCNICO";
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
  document.getElementById("sliderValue").value=val;
}

function uppercase(text) {
  text.value = text.value.toUpperCase();
}

function wordCount(textBox) {
  document.getElementById("counter").innerHTML = textBox.value.length;
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text",event.target.id);
}

function drop(event) {
  event.preventDefault();
  event.target.appendChild(document.getElementById(event.dataTransfer.getData("text")));
}

function storage() {
  var field = document.getElementById("fname");

  if(sessionStorage.getItem("autosave")) {
    field.value = sessionStorage.getItem("autosave");
  }

  field.addListener("change",function() {
    sessionStorage.setItem("autosave",field.value);
  });
}
