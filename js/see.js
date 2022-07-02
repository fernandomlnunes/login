//Ver senha tela cadstro
let btn_cad1 = document.querySelector('#verSenha')

btn_cad1.addEventListener('click', ()=>{
    let inputSenha1 = document.querySelector('#senha')

    if(inputSenha1.getAttribute('type') == 'password'){
        inputSenha1.setAttribute('type', 'text')
    } else {
        inputSenha1.setAttribute('type', 'password')
    }
})
// Ver senha cof. cadastro
let btn_cof_senha2 = document.querySelector('#verConfSenha')

btn_cof_senha2.addEventListener('click', ()=>{
    let inputSenha2 = document.querySelector('#confSenha')

    if(inputSenha2.getAttribute('type') == 'password'){
        inputSenha2.setAttribute('type', 'text')
    } else {
        inputSenha2.setAttribute('type', 'password')
    }
})

