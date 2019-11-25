function Calculer() {
    var X = document.getElementById('X').value;
    var Y = document.getElementById('Y').value;
    alert(X%Y);
}
function Calcul()  {
    var pointure = document.getElementById('pointure').value;
    var dateOfBirth = document.getElementById('dateOfBirth').value;
    var mathCalcul = ((((pointure * 2) + 5) * 50) - (dateOfBirth)) + 1769;
    alert(mathCalcul)
}
function Ok() {
    var Age = document.getElementById('Age').value;
    if (Age >= 18){
alert('Vous êtes majeur');
    }
  else {
alert('Vous êtes mineur');
window.location.replace("http://memo-web.fr/categorie-javascript-120.php"); 
  }
}