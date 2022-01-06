
let saveEl = document.getElementById('save-el');
let countEL = document.getElementById("count-el");
let welcomeEL = document.getElementById("welcome-el");

let count = 0;
let name = "Samuel Adeniji";
let greeting = "Welcome back ";

welcomeEL.innerText = greeting + name;
welcomeEL.innerText += "👋";

// This function is called when the increment button is clicked 
function increment() {
    count += 1;
    countEL.textContent = count; 
}

// This function is called when the save button is clicked
function save(){
    let counting = count + " - ";
    saveEl.textContent += counting;
    countEL.textContent = 0;
    count = 0; 

}