const colors = [ 'rgb(244,245,127', '#a5e004', '#e5a9db', '#756c9b', '#afd6ab']
const button = document.querySelector('button')

button.addEventListener('click', function (){ 
    const index = parseInt(Math.random()*colors.length)
    document.querySelector('body').style.backgroundColor = colors[index]
})