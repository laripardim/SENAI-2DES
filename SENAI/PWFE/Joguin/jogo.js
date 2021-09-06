var button = document.querySelectorAll("button");
var select = document.querySelector("#cards");

var escolha = "";
var vira = 0;
var ultima = "";
var check = false;
//var cores = ["red", "green", "blue"];
var cores = [
    {
        "img":"url(cassian.jpg)",
        "conta":0
    },
    {
        "img":"url(nessian.jpg)",
        "conta":0
    },
    {
        "img":"url(feysand.jpg)",
        "conta":0
    },
    {
        "img":"url(suriel.jpg)",
        "conta":0
    },
    {
        "img":"url(lucien.jpg)",
        "conta":0
    },
    {
        "img":"url(velaris.jpg)",
        "conta":0
    },
];

button.forEach(bt => {
    if(escolha < 3) {
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
    }
    
    bt.addEventListener("click", () => {
        let indice = Number(bt.className);
        if(vira < 2) {
            bt.style.background = cores[indice].img;
            vira++;
            if(vira === 1) ultima = bt;
            if(vira === 2) check = true;
        }

        if(check) {
            if(ultima.className === bt.className) {
                ultima.disabled = true;
                bt.disabled = true;
                vira = 0;
                
            } else {
                setTimeout(() => {
                    ultima.style.background = "#EFEFEF";
                    ultima.style.border = ".5px solid gray";
                    bt.style.background = "#EFEFEF";
                    bt.style.border = ".5px solid gray";
                    vira = 0;
                },3000);   
            }
            check = false;
        }
    });
});

console.log(cores);