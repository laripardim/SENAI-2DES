let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    adcionarNaLista();
});

function adcionarNaLista() {
    let div = document.createElement("div");
    div.setAttribute("class", "card")

    let texto = document.createElement("p");
    let text = document.createElement("p");
    let link = document.createElement("a");

    let botao_exluir = document.createElement("button");
    botao_exluir.addEventListener("click", () => {
        div.remove();
    })

    let input = document.getElementById("input").value;
    let inputdois = document.getElementById("inputdois").value;
    
    link.innerHTML = link;
    texto.innerHTML = input;
    text.innerHTML = inputdois;
    botao_exluir.innerHTML = "Excluir"

    let body = document.querySelector("body");
    body.appendChild(div);

    let day = new Date();
    let dia = day.getDate() + "/" + (day.getMonth() + 1) + "/" + day.getFullYear() + " " + day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds();
    let date = document.createElement("p");
    date.innerHTML = dia;

    
    div.appendChild(link);
    div.appendChild(date);
    div.appendChild(text);
    div.appendChild(texto);
    div.appendChild(botao_exluir);
}