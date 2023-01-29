
const heure = document.querySelector("#heure"); //Programme de l'horloge

setInterval(() => {
    const date = new Date();
    heure.innerHTML =
        (date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()) +
         ":" +
         (date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()) +
         ":" +
      (date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds());
  }, 0);
  
heure.style.color="orange"; //Changez la couleur de l'horloge.

const colors = ["red","green","rgb(133,122,200"];  //Mes couleurs

const button = document.getElementById('button'); //Programme Bouton

const color = document.querySelector('.color');

button.addEventListener('click', () => {

    const randomNumber = Math.floor(Math.random()*colors.length); //Fonction des couleurs aléatoire

    document.body.style.background = colors[randomNumber];
});

