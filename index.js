let input = "javascript ist einfach toll";
let output = "";

// elements 
let inputElement = document.getElementById('input');
let outputElement = document.getElementById('output');
let btnElement = document.getElementById('btn');

inputElement.innerHTML = input;

let translateFunc = function() {
    output = ""; 
    input = inputElement.value;
    input.toLowerCase();
    
    console.log(input)

    for(let i = 0; i < input.length; i++){
        
        if(input[i] === "a") {
            output += 4;
        }else if(input[i] === "e"){
            output += 3;
        } else if(input[i] === "i"){
            output += 1;
        } else if(input[i] === "o"){
            output += 0;
        } else {
            output += input[i];
        }
    }
    outputElement.innerHTML = output;
}
btnElement.addEventListener('click', translateFunc)
