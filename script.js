document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('converterButton').addEventListener('click', converterMoeda);

    function converterMoeda() {
        const valorEmReal = document.getElementById('realInput').value;
        const moedaSelecionada = document.getElementById('moedaSelect').value;

        let taxaDeCambio;

        switch (moedaSelecionada) {
            case 'dolar americano':
                taxaDeCambio = 0.20; 
                break;
            case 'euro':
                taxaDeCambio = 0.19; 
                break;

            default:
                alert('Moeda não suportada');
                return;
        }

        if (valorEmReal) {
            const valorConvertido = valorEmReal * taxaDeCambio;
            document.getElementById('resultadoMoeda').textContent = `Valor Convertido: ${valorConvertido.toFixed(2)} ${moedaSelecionada}`;
        } else {
            alert('Por favor, digite um valor em Real.');
        }
    }
});
