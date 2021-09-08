var input = document.querySelector("#input");
var lista = document.querySelector("#lista");

function add() {
    let input = document.querySelector("#input");
    let linha = document.createElement("div");
    linha.innerHTML = input.value;
    lista.appendChild(linha);
    let editar = document.createElement("button");
    editar.innerHTML = "editar";
    linha.appendChild(editar);
    editar.addEventListener("click", () => {
        linha.style.backgroundColor = "lightcoral";
    })
    let excluir = document.createElement("button");
    excluir.innerHTML = "excluir";
    linha.appendChild(excluir);
    excluir.addEventListener("click", () => {
        excluir.parentNode.remove();
    })
}