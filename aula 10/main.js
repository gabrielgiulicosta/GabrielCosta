let file = 'https://6724b5a4c39fedae05b271f9.mockapi.io/Animal';

function popularLista() {
    let file = 'https://6724b5a4c39fedae05b271f9.mockapi.io/Animal';

    fetch(file)
    .then(response => response.json())
    .then(myArray => {
        const lista = document.getElementById('listaAnimais');
        myArray.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `Nome: ${item.name}, Idade: ${item.idade}, Raça: ${item.raca}, ID: ${item.id}`;
            lista.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Dados corompidos ou não encontrados', error);
    });
}

function add() {
    let file = 'https://6724b5a4c39fedae05b271f9.mockapi.io/Animal';

    fetch(file, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(myArray => {
        console.log(myArray);
    })
    .catch(error => {
        console.error('Ocorreu um erro no cadastro', error);
    });
}