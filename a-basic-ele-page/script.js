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
    event.preventDefault() //prevents the automatic refreshing of the page and performs the required actions

    const msg = document.querySelector('#msg')
    const error = document.querySelector('.error')
    const msgCont = document.querySelector('.msg-cont')

    if(msg.value === ''){
        error.classList.add('show')
        setTimeout(function (){
            error.classList.remove('show')
        }, 3000)
    }
    else{
        msgCont.textContent = msg.value
        msg.value = ''
    }
    const { createClient } = supabase
supabase = createClient('https://taztytueelhdpsfjvscg.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhenR5dHVlZWxoZHBzZmp2c2NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1MDM1MjMsImV4cCI6MjAxNjA3OTUyM30.H7BNKOkvn8e_9CmNKxI6gsdnWm_Zo218bSlS_xzNiU0')

    const form = document.querySelector('#msg-form') //selected the form
    form.addEventListener('submit', async(event) => { 
        event.preventDefault() 
        
        const formips = form.querySelectorAll('input, textarea, select')
        let datas = {}
        formips.forEach(element => {
            const {value, name} = element //selected object has properties value and name
            if (value) {
                datas[name] = value
            }
        })

        const { error, data}=await supabase.from('msgcontent').insert([datas])
        console.log(error, data)

    })
}

