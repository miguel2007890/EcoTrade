

console.log("Visualitzant l'apartat introductori.")    // mostra el text entre cometes en la consola del panell d'eines
const dies = 365;
 let nom = "Eric"; 
 let edat = 27;
let a = 5; let b = 7; let c = -2;
let r = (a + 3 * b) * a / c;     // resultat: r = -65 
let frase= "El jugador " + nom + " té " + edat + " anys.";  // resultat: frase = "El jugador Eric té 27 anys"
console.log (frase)





let text = "hola ";
text += "mundo";    // resultat: text = "hola mundo" suma text a el segon text
console.log ("text:", text)


//exemples per veure resultats a la pantalla
const estacio = ["primavera","estiu","tardor","hivern"];
console.log ("estacio:", estacio.join(", "))


let parent = [];
parent[0] = "mare";
parent[1] = "pare";
parent[2] = "fill";
parent[3] = "avi";
console.log ("parent[0]:", parent[0])

const matriu = [[3,7,2],[5,9 -3]]; 
let element = matriu[1][0];    // resultat: element = 5
console.log ("element:", element)

console.log("edat:", edat); // igual a 27

//informació :
//(alumnes > 30) significa major que 30
//(alumnes < 30) significa menor que 30
//(alumnes == 30) significa igual a 30
//(alumnes >= 30) significa major o igual 
//(alumnes <= 30) significa msenor o igual
//(estacio != 'hivern')    // diferent a 'hivern' 
// entre dos  numeros &&


let temperatura = 20; let roba;
if (temperatura < 15) {
    roba = "d'hivern";
} 
if (temperatura > 15 && temperatura < 23) {
    roba = "de primavera"
}
else {
    roba = "d'estiu";
}    // resultat: roba = "d'estiu";
console.log ("ens hem de possar roba:", roba)

let oracio = "Els valors quadrats dels primers nombres són:"
for (let i = 1; i < 6; i++) {    // índex i des d'1 fins a 5, en increments d'1
    oracio += " ";    // s'afegeix un espai per separar els valors numèrics
    oracio += i * i;    // s'afegeix el valor de l'index al quadrat
}    // resultat: frase = "Els valors quadrats dels primers nombres són: 1 4 9 16 25"
console.log ("oracio:", oracio)
let i = 1;
while (i < 6) {    // mentre l'índex i sigui inferior a 6
    frase += " ";
    frase += i * i;
    i++;    // s'incrementa l'índex a cada iteració (si no es produïria un bucle infinit)
}
console.log (frase) // el resultat és el mateix de l'anterior
let continent = ["Europa","Àsia","Amèrica","Àfrica","Oceania"];
let llistat = "Nom dels continents:";
for (let i in continent) {    // per cada element de la llista, amb índex i
   llistat += " ";
   llistat += continent[i];
}    // resultat: llistat = "Nom dels continents: Europa Àsia Amèrica Àfrica Oceania"
console.log (llistat)
function incrementa(instant, durada) {    // definició de la funció incrementa amb dos paràmetres
    instant += durada;
    return instant;    // instrucció de retorn del resultat (15)
}
let temps = incrementa(10, 5)    // crida a la funció amb els arguments instant = 10 i durada = 5. Resultat: temps = 15
console.log ("temps:", temps)
function exemple (a) {    // definició convencional
    a => a + 100;    // definició mitjançant "procediment fletxa"
  }

  async function saluda() {
    return "Hola";
}
saluda().then(
    salutacio => salutacio + ". Bon dia"
  );
  let scriptURL = "https://script.google.com/macros/s/AKfycbxNOksQs6FEa_r_x4cicHnuXNdfAuy1lj_ERgpqv_4tM3PGUPJXFVoVqj4TMKkEeu0d2Q/exec?query=select";
  let consulta = scriptURL + "";
      fetch(consulta)
          .then((resposta) => {    // primera "promesa"
              return resposta.json();    // retorna les dades JSON obtingudes com a llista
          })
          .then((resposta) => {    // segona "promesa". Resposta = [{"Tipus":"Turisme","Motor":"Elèctric","Any":"2022","Velocitat":"120"}]
  // espai per a les instruccions que s'executen en rebre la llista
          });
  console.log (consulta)