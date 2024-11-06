document.querySelector('#title').onclick = function(){
    document.querySelector('h1').innerHTML = "UAU";
};

document.querySelector('#lorem').onclick = function(){
    document.querySelector('p').style.color = 'purple'
}

document.querySelector('#som').onclick = function(){
    document.querySelector('#ad').play()
}

document.querySelector('#outra').onclick = function(){
    document.querySelector('img').src ="fotos/KM-OOO.png"
    document.querySelector('img').style.height = '250px'
    document.querySelector('img').style.width = '250px'
}

const buttons = document.querySelectorAll('.btn');

for (let button of buttons) {
    button.addEventListener('click', function() {
        for(let btn of buttons){
            btn.style.backgroundColor = 'red';
        }
    })
}