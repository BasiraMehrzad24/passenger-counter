// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let saveEl = document.getElementById("save-el") // pass in arguments
let countEl = document.getElementById("count-el") // pass in arguments
let count = 0
console.log(saveEl)



function increment() {
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

}