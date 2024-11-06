document.querySelector('#title').onclick = function(){
    document.querySelector('h1').innerHTML = "WOW";
};

document.querySelector('#lorem').onclick = function(){
    document.querySelector('p').style.color = 'red'
}

document.querySelector('#som').onclick = function(){
    document.querySelector('#ad').play()
}

const alterabotoes = document.querySelectorAll('.btn')
}