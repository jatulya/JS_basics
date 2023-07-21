/* change bg colors */
const colors = [ 'rgb(244,245,127', '#a5e004', '#e5a9db', '#756c9b', '#afd6ab']
const button = document.querySelector('button')

button.addEventListener('click', function (){ 
    const index = parseInt(Math.random()*colors.length)
    document.querySelector('body').style.backgroundColor = colors[index]
})

/* message input box*/
const form = document.querySelector("#msg-form")
form.addEventListener('submit', submitted)

function submitted(event){
    event.preventDefault()

    const msg = document.querySelector('#msg')
    const error = document.querySelector('.error')
    const msgCont = document.querySelector('.msg-cont')

    if(msg.value === ''){
        error.classList.add('show')
        setTimeout(function (){
            error.classList.remove('show')
        }, 3000)
        console.log("Type something ppl")
    }
    else{
        msgCont.textContent = msg.value
        msg.value = ''
    }
}

