function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  function myFunction1() {
    var  y= document.getElementById("Navigation");
    if (y.style.display === "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block";
    }
  }


let images = [];
let i = 0;
let timer = 1200;


images[0]= "img/Pays/Argentine.jpg";
images[1]="img/Pays/Bolivie.jpg";
images[2]="img/Pays/Chili.jpg";
images[3]="img/Pays/Colombie.jpg";
images[4]="img/Pays/Costa rica.jpg";
images[5]="img/Pays/Cuba.jpg";
images[6]="img/Pays/Espagne.jpg";
images[7]="img/Pays/Equateur.jpg";
images[8]="img/Pays/Guatemala.jpg";
images[9]="img/Pays/Guinée equatorial.jpg";
images[10]="img/Pays/Honduras.jpg";
images[11]="img/Pays/Mexique.jpg";
images[12]="img/Pays/Nicaragua.jpg";
images[13]="img/Pays/Panama.jpg";
images[14]="img/Pays/Paraguay.jpg";
images[15]="img/Pays/Peru.jpg";
images[16]="img/Pays/Republique dominicaine.jpg";
images[17]="img/Pays/Salvador.jpg";
images[18]="img/Pays/Uruguay.jpg";
images[19]="img/Pays/Venezuela.jpg";

function diapoAuto() {
  document.diapo.src=images[i];
  if(i<images.length-1){
    i++;
  }
  else{
    i=0;
  }
  setTimeout("diapoAuto()", timer);
}

let namePays = [];
const pays = document.getElementById("name-pays");

namePays[0]= "Argentine";
namePays[1]="Bolivie";
namePays[2]="Chili";
namePays[3]="Colombie";
namePays[4]="Costa rica";
namePays[5]="Cuba";
namePays[6]="Espagne";
namePays[7]="Equateur";
namePays[8]="Guatemala";
namePays[9]="Guinée equatorial";
namePays[10]="Honduras";
namePays[11]="Mexique";
namePays[12]="Nicaragua";
namePays[13]="Panama";
namePays[14]="Paraguay";
namePays[15]="Peru";
namePays[16]="Republique dominicaine";
namePays[17]="Salvador";
namePays[18]="Uruguay";
namePays[19]="Venezuela";

function diapoName() {
  document.pays=namePays[i];
  if(i<namePays.length-1){
    i++;
    pays.innerHTML = `<h3>${namePays[i]}</h3>`
  }
  else{
    i=0;
  }
  setTimeout("diapoName()", timer);
}


window.onload=diapoName()
window.onload=diapoAuto()

