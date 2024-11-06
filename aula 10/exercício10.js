let file = "https://6724b5a4c39fedae05b271f9.mockapi.io/Animal";

        fetch(file)
            .then(response => response.json);
            .then(MyArray => {
                console.log(MyArray);
                document.querySelector('#id').innerHTML = MyArray[0].Nome;
                document.querySelector('#nome').innerHTML = MyArray[0].Nome;
                document.querySelector('#idade').innerHTML = MyArray[0].Nome;
                document.querySelector('raca').innerHTML = MyArray[0].Nome;
            });

function adicionar() {
                fetch(file, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                "Nome": 'Dara',
                "Idade": 9,
                "Raca": 'Golden-Retriver'
                })
                })
                .then(response => response.json())
                .then(MyArray => {
                    console.log(MyArray);
                })
                .catch(err => {
                    console.log(err);
                });
                }
                
                