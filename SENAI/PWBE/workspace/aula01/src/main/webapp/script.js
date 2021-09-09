var nome = document.querySelector("#nome");
var desc = document.querySelector("#desc");
var quantidade = document.querySelector("#quantidade");
var valor = document.querySelector("#valor");
var tipo = document.querySelector("#tipo");

var bt = document.querySelector("input[type=submit");

function edita(e) {
    let linha = e.parentNode.parentNode.querySelectorAll("td");
    nome.value = linha[0].innerHTML;
    quantidade.value = linha[1].innerHTML;
    valor.value = linha[2].innerHTML;
    desc.value = linha[3].innerHTML;
    tipo.value = 1;
    bt.value = "editar";
}

function excluir(e) {
    let linha = e.parentNode.parentNode.querySelectorAll("td");
    nome.value = linha[0].innerHTML;
    quantidade.value = linha[1].innerHTML;
    valor.value = linha[2].innerHTML;
    desc.value = linha[3].innerHTML;
    tipo.value = 2;
    bt.value = "Excluir";
}