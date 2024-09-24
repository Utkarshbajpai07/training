function background(){
    let p =document.getElementsByName('p');
    for(let i=0; i<p.length; i++){
        p[i].style.backgroundColor = 'blue';
    }
}
let button = document.getElementById('click')

button.addEventListener('click', background);
