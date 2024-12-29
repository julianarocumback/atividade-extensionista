// MENU
const headerNav = document.getElementById('header-nav'),
      navOpen = document.getElementById('nav-open'),
      navClose = document.getElementById('nav-close')

//  Abrir menu
if(navOpen){
    navOpen.addEventListener('click', () => {
        headerNav.classList.add('show-menu')
    })
}

// Fechar menu
if(navClose){
    navClose.addEventListener('click', () => {
        headerNav.classList.remove('show-menu')
    })
}

// PESQUISA
const games = [...document.querySelectorAll('.game')]

const pesquisa = document.getElementById('caixa-pesquisa')
const teste = pesquisa.value
console.log(teste)


// const p = pesquisa.value

// games.map((a)=>{
//     const teste  = a.innerText
//     console.log(teste)
// })

// if(p == teste){
//     console.log('ewea')
// }

// console.log(pesquisa)










// FILTRO
const filtro = document.getElementById('filtro'),
      categoria = document.getElementById('categoria')

// Abrir / fechar categoria
if(filtro){
    filtro.addEventListener('click', () => {
        categoria.classList.toggle('mostrar-categoria') 
    })
}

// filtrar
const btn_tudo = document.querySelector('#btn_tudo'),
      btn_memoria = document.querySelector('#btn_memoria'),
      btn_logica = document.querySelector('#btn_logica')

const memoria = [...document.querySelectorAll('.memoria')]
const logica = [...document.querySelectorAll('.logica')]

// mostrar todos os jogos
if(btn_tudo) {
    btn_tudo.addEventListener('click', () => {
        games.map((g) => {
            g.classList.remove('esconder')
        })
    })
}

// mostrar jogos de memória
if(btn_memoria) {
    btn_memoria.addEventListener('click', () => {
        logica.map((g) => {
            g.classList.add('esconder')
        })
        memoria.map((g) => {
            g.classList.remove('esconder')
        })
    })
}

// mostrar jogos de lógica
if(btn_logica) {
    btn_logica.addEventListener('click', () => {
        memoria.map((g) => {
            g.classList.add('esconder')
        })
        logica.map((g) => {
            g.classList.remove('esconder')
        })
    })
}
