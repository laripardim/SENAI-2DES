var button = document.querySelectorAll("button");

var vira = 0;
var ultima = "";
//var cores = ["red", "green", "blue"];
var cores = [
    {
        "cor":"red",
        "conta":0
    },
    {
        "cor":"green",
        "conta":0
    },
    {
        "cor":"blue",
        "conta":0
    }
];

button.forEach(bt => {
    let repete = true;
    while(repete) {
        let rand = Math.floor(Math.random()*3);
        if(cores[rand].conta < 2) {
            //bt.style.backgroundColor = cores[rand].cor;
            bt.className = rand;
            cores[rand].conta++;
            repete = false;
        }
    }
    bt.addEventListener("click", () => {
        let indice = Number(bt.className);
        if(vira < 2) {
            bt.style.backgroundColor = cores[indice].cor;
            vira++;
            if(vira == 1) ultima = bt.className;
        }

        if(vira >= 2) {
            if(ultima === bt.className) {
                ultima.disabled = true;
                bt.disabled = true;
                
            } else {
                console.log("Cartas Diferentes");
            }
        }
    });
});

console.log(cores);