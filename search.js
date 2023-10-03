const form = document.querySelector("#form");
const input = document.querySelector("#input");
const names = document.querySelectorAll(".name .content")
const result = document.querySelector("#result");

let contentFound = [];
let found = false;
div = document.createElement('div');
div.textContent = "";
form.addEventListener('submit', async(event)=>{
    found = false;
    div.textContent = "";
    result.textContent = "";
    event.preventDefault();
    names.forEach(element => {
        const inputName = element.textContent.toUpperCase();
        const searchName = input.value.toUpperCase();
        if(inputName.includes(searchName)){
            let ele = element.parentNode.parentNode.parentNode;
            result.appendChild(ele.cloneNode(true));
            found = true;
        }
    })

    if(found == false){
        div.textContent = "Not found";
        result.appendChild(div);
        div.classList.add('not-found');
        
    }
})