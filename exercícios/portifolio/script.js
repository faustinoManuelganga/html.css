

let header = document.querySelector('nav')

function headerColor(){
    header.classList.toggle('active', scrollY > -4)
}

window.addEventListener('scroll', headerColor())