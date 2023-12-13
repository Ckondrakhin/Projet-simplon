import { useState } from "react";
import "./App.css";

function App() {
  // Nous utilisons useState
  // count représente le compteur et setCount est la fonction qui permet de mettre à jour le compteur
  // ici je déclare une valeur initiale de 0
  const [count, setCount] = useState(0);

  //La fonction add permet de rajouter 1 au compteur
  const add = function () {
    setCount(count + 1);
  };

  //La fonction less permet d'enlever 1 au compteur
  const less = function () {
    setCount(count - 1);
  };

  //La fonction reset permet de mettre le compteur à zéro
  const reset = function () {
    setCount(0);
  };


  //ici je crée une fonction afin que le mot participant s'accorde en fonction du nombre de participant(s)
  const participants = function () {
    if (count === 0 || count === 1) {
      return "participant";
    } else {
      return "participants";
    }
  };

  return (
    // création de 3 bouttons "+" pour ajouter 1, "-" pour enlever 1 et "reset" pour remmetre le compteur à zéro.
    // Chaque bouton appelle sa fonction respective à l'évènement click
    // Enfin on affiche le résultat du compteur qui représente le nombre de participant grace à la fonction count
    <>
      <h1>Compteur de participant</h1>
      <div className="card">
        <button onClick={add}> + </button>
        <button onClick={less}> - </button>
        <button onClick={reset}> reset </button>

        <p>
          Il y a {count} {participants()}
        </p>
      </div>
    </>
  );
}

export default App;
