export function modal (){
    /*********************
 Btn connexion
*/
 
let modal = document.getElementById("myModal");
let btn_connexion = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn_connexion.onclick = function() {
  modal.style.display = "block";
}      
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/*********************
 Btn connectez vous
*/

let modal2 = document.getElementById("myModal2");
let btn_connectez_vous = document.getElementById("myBtn2");
let span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn_connectez_vous.onclick = function() {
  modal2.style.display = "block";
  modal.style.display = "none"
}      
// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
} 

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
// bouton pour se connecter apres avoir inscrit son mail et mdp
let btn_se_connecter = document.getElementsByClassName("btn_se_connecter")[0];

btn_se_connecter.onclick = function() {
  modal2.style.display = "none";
}   

/*********************
 Btn inscrivez vous
*/

let modal3 = document.getElementById("myModal3");
let btn_inscrivez_vous = document.getElementById("myBtn3");
let span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal
btn_inscrivez_vous.onclick = function() {
  modal3.style.display = "block";
  modal.style.display = "none"
}      
// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
} 

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal3.style.display = "none";
  }
}
// bouton pour se connecter apres avoir inscrit son mail et mdp
let btn_s_inscrire= document.getElementsByClassName("btn_s_inscrire")[0];
btn_s_inscrire.onclick = function() {
  modal3.style.display = "none";
}   

}
