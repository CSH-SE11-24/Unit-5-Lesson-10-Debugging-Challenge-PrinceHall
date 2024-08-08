console.log("challenge3.js running");

let input1 = document.querySelector("#step1")
console.log(input1)
let p1 = document.querySelector("#step1Text")
console.log(p1)



input1.addEventListener("keypress", function(event){
  console.log(input1.value)
  console.log(p1)
  if (input1.value === "Select elements"){
    p1.innerHTML = `<p id="step1Text">Correct!</p>`
    console.log("test")
    
  } else {
    p1 = `<p id="step1Text">"Not quite..."</p>`
  }
})

// Set up the other two steps to work correctly as well!

