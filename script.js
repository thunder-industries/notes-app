let notes = []

let saveEL = document.getElementById("save")
const textArea = document.getElementById("text-area")
let ulEl = document.getElementById("history")

saveEL.addEventListener("click", function(){
   notes.unshift(textArea.value)
   textArea.value = ""
   render()
})


function render(){
    let items =""
for(i = 0; i < notes.length; i++){
   items +=
    `<li>${notes[i]}</li> `
   console.log(notes[i])
}
ulEl.innerHTML = items
}


let clearEl = document.getElementById("clear")

clearEl.addEventListener("click", function(){
    notes.pop()
    render()
})