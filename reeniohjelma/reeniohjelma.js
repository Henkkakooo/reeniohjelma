/* Tehdään funktio TDEE napeille 
"onclick= BUTTON(-x)" ja noudetaan TDEE parametrit URL-osoitteesta*/

function tdeecalc(sumValue) {
  const Params = new URLSearchParams(window.location.search);
  const Param = parseFloat(Params.get('result'));
 
  if (!isNaN(Param)) {

    const sumResult = Param + sumValue + "kcal/vuorokausi";
    document.getElementById('sinunpkt').textContent = sumResult;
    
   } else {
    document.getElementById('sinunpkt').textContent = "invalid result";
   }
   


}

/* Luodaan funktio treenipäivien valitsemiselle*/

function valitseTreeni() {
    document.getElementById('output').innerHTML = '';
  
    var inputs = document.querySelectorAll('input[type="checkbox"]:checked');
  

    for (var i = 0; i < inputs.length; i++) {
      var label = document.createElement('label');
      label.innerText = inputs[i].value + ': ';
      var input = document.createElement('input');
      input.type = 'text';
      input.name = 'selectedOption' + i;
      input.value = "Syötä treenisi tähän"
      label.appendChild(input);
      document.getElementById('output').appendChild(label);
    }
  }
  
  /* Luodaan checkboxit eri päiville niin, että käyttäjä
  voi valita päivät ja klikata "valitse" */
  
  


  function showPrograms(){
    const programsUp = document.getElementById("programsUp");
    programsUp.style.display = "block";
  
  }

  var form = document.getElementById("chooseDays");
  
  form.addEventListener("submit",function(event) {
    event.preventDefault();
    
    
    var inputs = document.getElementsByTagName("input");
    var selectedOptions = "";
  
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type === "checkbox" && inputs[i].checked) {
        selectedOptions += inputs[i].value + '<br>';
        
      }
    }
    document.getElementById("resultDays").innerHTML = selectedOptions;
    showPrograms();
    updateInputs();
    
  });
  


