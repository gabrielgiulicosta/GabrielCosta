//function display(msg){
//    console.log(msg);
//}

//function soma(num1,num2){
//    display (num1 + num2);
//}

//soma(2, 3);

//let file = "db.json";

//fetch(file)
    //.then(response => response.json);
    //.then(obj => {
        //.log(obj);
        //document.querySelector('#txt').innerHTML = obj.nome;
    //});



    //let file = "db.txt";

    //fetch(file)
        //.then(response => response.txt);
        //.then(text => console.log(text));



        let file = "https://6724b5a4c39fedae05b271f9.mockapi.io/clientes";

        fetch(file)
            .then(response => response.json);
            .then(MyArray => {
                console.log(MyArray);
                document.querySelector('#txt').innerHTML = MyArray[2].nome;
            });