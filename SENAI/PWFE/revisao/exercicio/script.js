let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    adcionarNaLista();
});

function adcionarNaLista() {
    let div = document.createElement("div");
    div.setAttribute("class", "card")

    let texto = document.createElement("p"); //criar tags
    let text = document.createElement("p");

    let botao_exluir = document.createElement("button");
    botao_exluir.addEventListener("click", () => {
        div.remove();
    })

    let input = document.getElementById("input").value;
    let inputdois = document.getElementById("inputdois").value;
    // let remove = document.getElementById("input");
    // let indice = remove.option.selectedIndex;
    // if(remove.option.remove) {
    //     remove.option.remove(indice);
    // }

    // var data = new Date();
    // console.log(data);
    // console.log(data.getDate());

    texto.innerHTML = input;
    text.innerHTML = inputdois;
    botao_exluir.innerHTML = "Excluir"

    let body = document.querySelector("body");
    body.appendChild(div);

    let day = new Date();
    let dia = day.getDate() + "/" + (day.getMonth() + 1) + "/" + day.getFullYear() + " " + day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds();
    let date = document.createElement("p");
    date.innerHTML = dia;

    div.appendChild(date);
    div.appendChild(text);
    div.appendChild(texto);
    div.appendChild(botao_exluir);
}