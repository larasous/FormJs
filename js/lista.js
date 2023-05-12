window.onload = () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', adicionarProduto);

    function adicionarProduto(event) {
        event.preventDefault();

        // pegar os valores do formulário
        const nome = document.getElementById('nome').value;
        const preco = document.getElementById('preco').value;
        const qtd = document.getElementById('qtd').value;

        // criar um novo elemento li
        const li = document.createElement('li');
        li.innerHTML = `${nome} - ${preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} - ${qtd} unidades`;

        // adicionar o novo elemento à lista
        const listaProdutos = document.getElementById('lista-produtos');
        listaProdutos.appendChild(li);

        // limpar os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('preco').value = '';
        document.getElementById('qtd').value = '';
    }

    function formatarReal(valor) {
        const valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return valorFormatado;
    }
}