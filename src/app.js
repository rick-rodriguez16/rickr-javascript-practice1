import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
   
// create 4 arrays that are part of a sentence

// excuse  the dog   ate        my homework   before class
//         who       action     what          when

let who = ['the dog', 'my grandma'];
let action = ['ate', 'broke'];
let what = ['my phone', 'my car'];
let when = ['this morning.', 'while I was sleeping.'];
let className = ["alert-warning", "alert-success"]

// create a variable that holds a random number between 0 - 1
// print a random element from the who array

// let randomIndex = Math.floor(Math.random() * 2);
// let selectedWho = who[randomIndex]

// randomIndex = Math.floor(Math.random() * 2);
// let selectedAction = action[randomIndex]

// randomIndex = Math.floor(Math.random() * 2);
// let selectedWhat = what[randomIndex];

// randomIndex = Math.floor(Math.random() * 2);
// let selectedWhen = when[randomIndex];

function selectExcuse(array) {

  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

let selectedWho = selectExcuse(who);
let selectedAction = selectExcuse(action);
let selectedWhat = selectExcuse(what);
let selectedWhen = selectExcuse(when);


// render the excuse to the browser
let htmlElement = document.querySelector(".excuse");

let selectedClass = selectExcuse(className);
htmlElement.classList.add(selectedClass)
htmlElement.innerHTML = selectedWho + " " + selectedAction + " " + selectedWhat + " " + selectedWhen;



};
