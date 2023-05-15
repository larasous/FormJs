window.onload = () => {
    const form = document.querySelector('.form');
    const listaProdutos = document.getElementById('lista-produtos');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // pegar os valores do formulário
        let nome = document.getElementById('nome').value;
        let preco = document.getElementById('preco').value;
        let qtd = document.getElementById('qtd').value;

        // criar um novo elemento li
        const li = document.createElement('li');
        li.innerHTML = `${nome}<br> ${formatarReal(preco)} - ${qtd} unidades`;

        // adicionar o novo elemento à lista
        listaProdutos.appendChild(li);

        // salvar a lista na localStorage
        localStorage.setItem('listaProdutos', listaProdutos.innerHTML);

        // limpar os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('preco').value = '';
        document.getElementById('qtd').value = '';
    });

    // carregar a lista da localStorage
    listaProdutos.innerHTML = localStorage.getItem('listaProdutos');

    function formatarReal(valor) {
        const valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return valorFormatado;
    }
}
