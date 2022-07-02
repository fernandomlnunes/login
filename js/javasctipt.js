//Ver senha tela de login
let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha_log')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})
//Ver senha tela cadstro
let btn_cad = document.querySelector('#verSenha')

btn_cad.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha_1')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})
// Ver senha cof. cadastro
let btn_cof_senha = document.querySelector('#verConfSenha')

btn_cof_senha.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#confsenha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})
//função cadastrar

let nome = document.querySelector('#nome_1')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validusuario = false

let senha_1 = document.querySelector('#senha_1')
let labelSenha = document.querySelector('#labelSenha')
let validsenha_1 = false

let confsenha = document.querySelector('#confsenha')
let labelconfsenha = document.querySelector('#labelconfsenha')
let validconfsenha = false

let msgError = document.querySelector('#msgError')
let msgSucces = document.querySelector('#msgSucces')

//Válidação campo nome - cadastro
nome.addEventListener(`keyup`, () => {
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insira no minímo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else{
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})
//Válidação campo usuário - cadastro
usuario.addEventListener(`keyup`, () => {
    if(usuario.value.length <= 4){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuário *Insira no minímo 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validusuario = false
    } else{
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color: green')
        validusuario = true
    }
})
//Válidação campo senha - cadastro
senha_1.addEventListener(`keyup`, () => {
    if(senha_1.value.length <= 7){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no minímo 8 caracteres'
        senha_1.setAttribute('style', 'border-color: red')
        validsenha_1 = false
    } else{
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha_1.setAttribute('style', 'border-color: green')
        validsenha_1 = true
    }
})
//Válidação campo confSenha - cadastro
confsenha.addEventListener(`keyup`, () => {
    if(senha_1.value != confsenha.value){
        labelconfsenha.setAttribute('style', 'color: red')
        labelconfsenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        confsenha.setAttribute('style', 'border-color: red')
        validconfsenha = false
    } else{
        labelconfsenha.setAttribute('style', 'color: green')
        labelconfsenha.innerHTML = 'Confirmar Senha'
        confsenha.setAttribute('style', 'border-color: green')
        validconfsenha = true
    }
})
function btn_cadastrar(){
    if(validNome && validusuario && validsenha_1 && validconfsenha){
        //local estorge, salvar o usuario no navegador --- Erro salvar no storag
         let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        listaUser.push({
            nomeCad: nome_1.value,
            userCad: usuario.value,
            passwordCad: senha_1.value
        })
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        setTimeout(() => {
            window.location.href = 'index.html'
        }, 3000);

        msgSucces.setAttribute('style', 'display: block')
        msgSucces.innerHTML = 'Cadastrando Usuário....'

        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
    } else{
        msgSucces.setAttribute('style', 'display: none')
        msgSucces.innerHTML = ''

        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Preencha todos campos corretamente antes de cadastrar'
    }
}
function entrar(){
    let usuario_cad = document.querySelector('#usuario_log')
    let labelUsuario_cad = document.querySelector('#usuario_log')

    let senha_cad = document.querySelector('#senha_log')
    let labelSenha_cad = document.querySelector('#labelsenha_log')

    let msgError = document.querySelector('#msgErrorEnter')
    let listaUser_log = []

    let userValid = {
        nomeCad: '',
        userCad: '',
        passwordCad: ''
    }

    listaUser_log = JSON.parse(localStorage.getItem('listaUser'))

    listaUser_log.forEach((item) => {
        if(usuario_log.value == item.userCad && senha_log.value == item.passwordCad){

            userValid = {
                nomeCad: item.nomeCad,               
                userCad: item.userCad,
                passwordCad: item.passwordCad
            }
        }
    })

    if(usuario_log.value == userValid.userCad && senha_log.value == userValid.passwordCad){

        window.location.href = "https://fernandomlnunes.github.io/vivatecnologia/"

        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        localStorage.setItem('token' , token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else {
        labelUsuario_log.setAttribute('style', 'color:red')
        usuario_log.setAttribute('style', 'border-color:red')
        labelSenha_log.setAttribute('style', 'color:red')
        senha_log.setAttribute('style', 'border-color:red')
        msgErroEnter.innerHTML = 'Usuário ou senha incorretos'
        usuario_log.focus()
    } 
}

if(localStorage.getItem('token') == null){
    //alert('Você precisa estar logado para acessa essa página')
    //window.location.href = 'index.html'
}

function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = 'index.html'
}
