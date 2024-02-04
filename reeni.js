/* Luodaan funktio päivittäisten kaloritarpeiden laskemiseen (TDEE).
 TDEE:n laskemiseen tarvitaan käyttäjän painoindeksi,
 paino, pituus, ikä, aktiivisuustaso. */

function calculateTDEE() {

    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);
    let age = Number(document.getElementById("age").value);
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let activity = Number(document.getElementById("activity").value);
    
    /* Painoindeksin laskemiseen on käytetty suosittua Harris-Benedict-
    laskukaavaa: */

    let bmr;
    if (gender === "male") {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    
   /* TDEE:n laskemiseen käytetään alla olevaa laskukaavaa. 
   Aktiivisuustasoa vastaava valinta antaa tietyn kertoimen ja painoindeksin
   sekä tämän aktiivisuustason kertoimen tulo luo suuntaa-antavan luvun
   käyttäjän päivittäisestä kaloritarpeesta.  */

    let tdee = bmr * activity;

    document.getElementById("result").value = tdee.toFixed(2) + "Kcal/vuorokausi";
    let loose = tdee.toFixed(2) - 200 ;
  document.getElementById("loose").value = loose.toFixed(2) + "kcal";
  document.getElementById("maintain").value = tdee.toFixed(2) + "kcal";
  document.getElementById("gain").value = loose + 400 + "kcal";

  /* Lisäsin näkymät painon pudottamiseen, ylläpitämiseen ja lisäämiseen. */




  }

