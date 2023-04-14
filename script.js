var itens = []

function adicionar() {
    var nome = document.getElementById('proxItem').value
    var lista = document.getElementById('minha-lista')
    var novoItem = document.createElement("li")
    var textoItem = document.createTextNode(nome)

    if (nome === '') {
        alert('Escreva o nome do item')
    } else if (itens.includes(nome)) {
        alert('Item já adicionado')
    } else {
        novoItem.appendChild(textoItem)
        lista.appendChild(novoItem)
        novoItem.classList.add('list-group-item')
        itens.push(nome)
    }
    document.getElementById('proxItem').value = ''
}