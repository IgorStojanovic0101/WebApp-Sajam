/*
* Deo sa promenljivama
*/

var kanvasDuzina = 1080;
var kanvasVisina = 180; //zapravo polovina stvarne visine, potrebno za crtanje x-ose
var velikoS0 = 0; // amplituda
var velikoSm = 0;
var wm = 1; // faza
var w0 = 0; 
var ka = 1; // konstanta proporcionalnosti 

/*
* funkcije za crtanje grafika
*/
function crtajNosiocaKAM() {

var kanvas = document.getElementById("kanvasNosilacKAM");
var kontekst = kanvas.getContext("2d");

kontekst.clearRect(0, 0, kanvas.width, kanvas.height);

kontekst.moveTo(0, kanvasVisina);
kontekst.lineTo(kanvasDuzina, kanvasVisina );
kontekst.stroke();

kontekst.strokeStyle = "#000000";

kontekst.moveTo(0,0);
kontekst.lineTo(0,360);
kontekst.stroke();


kontekst.font="20px Verdana";
kontekst.fillText("t", 1030, 200);

var nula = String.fromCharCode(8320);
var tekst = "S" + nula + "(t)";
kontekst.fillText(tekst, 10, 25);

var xPom = 0, yPom = kanvasVisina;

kontekst.strokeStyle = "#005ce6";

for(var x = 1; x < kanvasDuzina; x++){
    
    kontekst.beginPath();
    kontekst.moveTo(xPom, yPom);
    var y = kanvasVisina - racunajNosilac(x);
    kontekst.lineTo(x, y);
    xPom = x;
    yPom = y;
    kontekst.stroke();
 
}

}

function crtajModulisuciSignalKAM() {


var kanvas = document.getElementById("kanvasModulisuciKAM");
var kontekst = kanvas.getContext("2d");

kontekst.strokeStyle = "#000000";

kontekst.clearRect(0, 0, kanvas.width, kanvas.height);

kontekst.moveTo(0, kanvasVisina);
kontekst.lineTo(kanvasDuzina, kanvasVisina );
kontekst.stroke();

kontekst.moveTo(0,0);
kontekst.lineTo(0,360);
kontekst.stroke();

kontekst.font="20px Verdana";
kontekst.fillText("t", 1030, 200);

var m = "m";
m.sup();
var tekst = "S" + m + "(t)";
kontekst.fillText(tekst, 10, 25);


var xPom = 0, yPom = kanvasVisina;

kontekst.strokeStyle = "#005ce6";

for(var x = 1; x < kanvasDuzina; x++){
    kontekst.beginPath();
    kontekst.moveTo(xPom, yPom);
    var y = kanvasVisina - racunajModulisaniSignalZaKAM(kanvasDuzina -x);
    kontekst.lineTo(x, y);
    xPom = x;
    yPom = y;
    kontekst.stroke();
 
}

}

function KAMSignal() {

var kanvas = document.getElementById("kanvasKAM");
var kontekst = kanvas.getContext("2d");

kontekst.strokeStyle = "#000000";
kontekst.clearRect(0, 0, kanvas.width, kanvas.height);

kontekst.moveTo(0, kanvasVisina);
kontekst.lineTo(kanvasDuzina, kanvasVisina );
kontekst.stroke();

kontekst.moveTo(0,0);
kontekst.lineTo(0,360);
kontekst.stroke();

kontekst.font="20px Verdana";
kontekst.fillText("t", 1030, 200);

kontekst.fillText("S(t)", 10, 25);

var xPom = 0, yPom = kanvasVisina;

kontekst.strokeStyle = "#005ce6";

for(var x = 1; x < kanvasDuzina; x++){
    kontekst.beginPath();
    kontekst.moveTo(xPom, yPom);
    var y = kanvasVisina - racunajKAMSignal(kanvasDuzina-x);
    kontekst.lineTo(x, y);
    xPom = x;
    yPom = y;
    kontekst.stroke();
 
}
}
function crtajKAM(){
    crtajNosiocaKAM();
    crtajModulisuciSignalKAM();
    KAMSignal();
}

function  crtajNosiocaAM2BO() {
var kanvas = document.getElementById("kanvasNosilacAM2BO");
var kontekst = kanvas.getContext("2d");

kontekst.strokeStyle = "#000000";

kontekst.clearRect(0, 0, kanvas.width, kanvas.height);

kontekst.moveTo(0, kanvasVisina);
kontekst.lineTo(kanvasDuzina, kanvasVisina );
kontekst.stroke();

kontekst.moveTo(0,0);
kontekst.lineTo(0,360);
kontekst.stroke();

kontekst.font="20px Verdana";
kontekst.fillText("t", 1030, 200);

var nula = String.fromCharCode(8320);
var tekst = "S" + nula + "(t)";
kontekst.fillText(tekst, 10, 25);

var xPom = 0, yPom = kanvasVisina;

kontekst.strokeStyle = "#005ce6";
for(var x = 1; x < kanvasDuzina; x++){
    kontekst.beginPath();
    kontekst.moveTo(xPom, yPom);
    var y = kanvasVisina - racunajNosilac(kanvasDuzina-x);
    kontekst.lineTo(x, y);
    xPom = x;
    yPom = y;
    kontekst.stroke();
}
}
function crtajModulisuciSignalAM2BO(){
var kanvas = document.getElementById("kanvasModulisuciAM2BO");
var kontekst = kanvas.getContext("2d");

kontekst.strokeStyle = "#000000";
kontekst.clearRect(0, 0, kanvas.width, kanvas.height);

kontekst.moveTo(0, kanvasVisina);
kontekst.lineTo(kanvasDuzina, kanvasVisina );
kontekst.stroke();

kontekst.moveTo(0,0);
kontekst.lineTo(0,360);
kontekst.stroke();

kontekst.font="20px Verdana";
kontekst.fillText("t", 1030, 200);

var m = "m";
m.sup();
var tekst = "S" + m + "(t)";
kontekst.fillText(tekst, 10, 25);

var xPom = 0, yPom = kanvasVisina;
kontekst.strokeStyle = "#005ce6";

for(var x = 1; x < kanvasDuzina; x++){
    kontekst.beginPath();
    kontekst.moveTo(xPom, yPom);
    var y = kanvasVisina - racunajModulisaniAM2BOSignal(kanvasDuzina-x);
    kontekst.lineTo(x, y);
    xPom = x;
    yPom = y;
    kontekst.stroke();
}
}

function AM2BOSignal(){
var kanvas = document.getElementById("kanvasAM2BO");
var kontekst = kanvas.getContext("2d");

kontekst.strokeStyle = "#000000";
kontekst.clearRect(0, 0, kanvas.width, kanvas.height);

kontekst.moveTo(0, kanvasVisina);
kontekst.lineTo(kanvasDuzina, kanvasVisina );
kontekst.stroke();

kontekst.moveTo(0,0);
kontekst.lineTo(0,360);
kontekst.stroke();

kontekst.font="20px Verdana";
kontekst.fillText("t", 1030, 200);

kontekst.fillText("S(t)", 10, 25);

var xPom = 0, yPom = kanvasVisina;
kontekst.strokeStyle = "#005ce6";

for(var x = 1; x < kanvasDuzina; x++){
    kontekst.beginPath();
    kontekst.moveTo(xPom, yPom);
    var y = kanvasVisina - racunajAM2BOSignal(kanvasDuzina-x);
    kontekst.lineTo(x, y);
    xPom = x;
    yPom = y;
    kontekst.stroke();
}
}

function crtajAM2BO() {
     crtajNosiocaAM2BO();
     crtajModulisuciSignalAM2BO();
     AM2BOSignal();
}

function crtajNosiocaFrekfencijskeModulacije() {

var kanvas = document.getElementById("kanvasNosilacFrekfencijska");
var kontekst = kanvas.getContext("2d");

kontekst.strokeStyle = "#000000";
kontekst.clearRect(0, 0, kanvas.width, kanvas.height);

kontekst.moveTo(0, kanvasVisina);
kontekst.lineTo(kanvasDuzina, kanvasVisina );
kontekst.stroke();

kontekst.moveTo(0,0);
kontekst.lineTo(0,360);
kontekst.stroke();

kontekst.font="20px Verdana";
kontekst.fillText("t", 1030, 200);

var nula = String.fromCharCode(8320);
var tekst = "S" + nula + "(t)";
kontekst.fillText(tekst, 10, 25);

var xPom = 0, yPom = kanvasVisina;
kontekst.strokeStyle = "#005ce6";

for(var x = 1; x < kanvasDuzina; x++){
    kontekst.beginPath();
    kontekst.moveTo(xPom, yPom);
    var y = kanvasVisina - racunajNosilac(x);
    kontekst.lineTo(x, y);
    xPom = x;
    yPom = y;
    kontekst.stroke();
 
}

}

function crtajModulisuciFrekfencijskeModulacije() {

var kanvas = document.getElementById("kanvasModulisuciFrekfencijska");
var kontekst = kanvas.getContext("2d");

kontekst.strokeStyle = "#000000";
kontekst.clearRect(0, 0, kanvas.width, kanvas.height);

kontekst.moveTo(0, kanvasVisina);
kontekst.lineTo(kanvasDuzina, kanvasVisina );
kontekst.stroke();

kontekst.moveTo(0,0);
kontekst.lineTo(0,360);
kontekst.stroke();

kontekst.font="20px Verdana";
kontekst.fillText("t", 1030, 200);

var m = "m";
m.sup();
var tekst = "S" + m + "(t)";
kontekst.fillText(tekst, 10, 25);

var xPom = 0, yPom = kanvasVisina;
kontekst.strokeStyle = "#005ce6";

for(var x = 1; x < kanvasDuzina; x++){
    kontekst.beginPath();
    kontekst.moveTo(xPom, yPom);
    var y = kanvasVisina - racunajModulisaniFrekfencijskeModulacije(kanvasDuzina - x);
    kontekst.lineTo(x, y);
    xPom = x;
    yPom = y;
    kontekst.stroke();
 
}

}

function frekfencijskaModulacijaSignal(){
var kanvas = document.getElementById("kanvasFrekfencijska");
var kontekst = kanvas.getContext("2d");

kontekst.strokeStyle = "#000000";
kontekst.clearRect(0, 0, kanvas.width, kanvas.height);

kontekst.moveTo(0, kanvasVisina);
kontekst.lineTo(kanvasDuzina, kanvasVisina );
kontekst.stroke();

kontekst.moveTo(0,0);
kontekst.lineTo(0,360);
kontekst.stroke();

kontekst.font="20px Verdana";
kontekst.fillText("t", 1030, 200);

kontekst.fillText("S(t)", 10, 25);


var xPom = 0, yPom = kanvasVisina;
kontekst.strokeStyle = "#005ce6";

for(var x = 1; x < kanvasDuzina; x++){
    kontekst.beginPath();
    kontekst.moveTo(xPom, yPom);
    var y = kanvasVisina - racunajFrekfencijski(kanvasDuzina-x);
    kontekst.lineTo(x, y);
    xPom = x;
    yPom = y;
    kontekst.stroke();
}
}


function crtajFrekfencijsku(){
    crtajNosiocaFrekfencijskeModulacije();
    crtajModulisuciFrekfencijskeModulacije();
    frekfencijskaModulacijaSignal();
    
}

/*
 * funckije za izracunavanje
*/

function racunajNosilac(x)
{
    velikoS0 = 0.7; // amplituda
    wm = 2 * Math.PI * 0.05; // milisekunde su podeoci
    w0 = 10 * wm;
    return velikoS0  * ( Math.cos (w0 * x * Math.PI  /  180) * 120 );
}

function racunajModulisaniSignalZaKAM(i)
{
    velikoS0 = 0.7;
    var m0 = document.getElementById("m0KAM").value;
    velikoSm = (velikoS0 * m0) / ka;  
    wm = 2 * Math.PI * 0.05; // milisekunde
    var pom = i/1000;
    return   velikoSm * pom * ( Math.cos (wm * i * Math.PI / 180) * 120 ) ;
}

function racunajKAMSignal(i)
{
    
    var m0 = document.getElementById("m0KAM").value;
    velikoS0 = 0.7;
    var pom = i/100000;
    wm = 2 * Math.PI * 0.05;
    w0 = 10 * wm;
  
    return velikoS0 * pom *(1 + m0 * (Math.cos(wm * i * Math.PI / 180) * 120 )) * (Math.cos(w0 * i * Math.PI / 180) * 120);
  
}
function racunajModulisaniAM2BOSignal(i)
{
    velikoS0 = 0.7;
    var m0 = document.getElementById("m0AM2BO").value;
    velikoSm = (velikoS0 * m0) / ka;  
    wm = 2 * Math.PI * 0.05; // milisekunde
    var pom = i/1000;
 
    return   velikoSm * pom * ( Math.cos (wm * i * Math.PI / 180) * 120 );
}

function racunajAM2BOSignal(i)
{
     velikoS0 = 0.7;
    var pom = i/100000;
    wm = 2 * Math.PI * 0.05;
    w0 = 10 * wm;
 
 return ka *pom* racunajModulisaniAM2BOSignal(i) * Math.cos( w0 * i * Math.PI / 180 ) * 120;

    
}

function racunajModulisaniFrekfencijskeModulacije(i) {
    velikoS0 = 0.7;
    var m0 = document.getElementById("m0Frekfencijska").value;
    velikoSm = (velikoS0 * m0) / ka;  
    wm = 2 * Math.PI * 0.05; // milisekunde
    var pom = i/1000;
 
    return   velikoSm * pom * ( Math.cos (wm * i * Math.PI / 180) * 120 );
}

function racunajFrekfencijski(i){
    
  
    
     var pom = i/10;
    wm = 2 * Math.PI * 0.05;
    w0 = 10 * wm;
    
    var k = document.getElementById("k").value;
    
    var m0 = document.getElementById("m0Frekfencijska").value;
    velikoSm = (velikoS0 * m0) / ka;
    return velikoS0*pom *Math.cos((w0 * i * Math.PI/180 )*120  + velikoSm * k * (Math.sin(wm * i * Math.PI / 180) * 120 )/ wm);

   
   
    
}

function poslednjiTrzaj(i){
    
    velikoS0 = 0.7;
    
     var pom = i/10;
    wm = 2 * Math.PI * 0.05;
    w0 = 10 * wm;
    
    var k = document.getElementById("k").value;
    
    var m0 = document.getElementById("m0Frekfencijska").value;
    velikoSm = (velikoS0 * m0) / ka;
    return velikoS0*pom *Math.cos((w0 * i * Math.PI/180 )*120  + velikoSm * k * (Math.sin(wm * i * Math.PI / 180) * 120 )/ wm);

    
}