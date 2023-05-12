function formatarReal(input) {
    var value = input.value.replace(/\D/g, '');
    value = (value/100).toLocaleString('pt-br', {minimumFractionDigits: 2});
    input.value = value;
}

window.onload = () => {
    const form = document.querySelector('#form');
    form.addEventListener('submit', (event) => {
        const precoInput = document.querySelector('#preco');
        const qtdInput = document.querySelector('#qtd');
        
        if (precoInput.value < 0 || qtdInput.value < 0) {
            alert('Não é possível inserir valores negativos.');
            event.preventDefault();
        }
    });
};