import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

    // create combinations of strings using more than one array

    const colors = ["Black", "Red", "White", "Green", "Pink"];
    const animals = ["Wolf", "Chicken", "Panther", "Crocodile"];
    const locations = ["swamp", "tundra", "jungle", "desert"];

    for (let colorIndex = 0; colorIndex < colors.length; colorIndex++) {
      for (let animalIndex = 0; animalIndex < animals.length; animalIndex++) {
        for (let locationIndex = 0; locationIndex < locations.length; locationIndex++) {
          console.log(colors[colorIndex] + " " + animals[animalIndex] + " " + locations[locationIndex] + "!");
        }
      }
    }


  
};
