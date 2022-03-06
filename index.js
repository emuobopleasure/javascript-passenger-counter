let count = 0;

let countEl = document.getElementById("count-el");
console.log(countEl)

function increment() {
    count+= 1
    console.log(count)
   return countEl.innerText = count;
}

function decrement(){
    count-= 1;
    console.log(count);
   return countEl.innerText = count;
}

let saveEl = document.getElementById("save-el");


function save() {
    // console.log(count);
    let previousEntry = ` ${count} - `;
    saveEl.textContent += previousEntry;
    countEl.innerText = 0;
    count = 0;
}

// let welcomeEl = document.getElementById("welcome-el");
// let name = "Arizabalaga";
// let greeting = "Welcome to our page, ";

// let welcomeMsg = greeting + name;
// // console.log(welcomeMsg)
// welcomeEl.innerText = welcomeMsg + "👋";
