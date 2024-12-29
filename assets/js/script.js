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











// FILTRO
const filtro = document.getElementById('filtro'),
      categoria = document.getElementById('categoria')
      

// Abrir / fechar categoria
if(filtro){
    filtro.addEventListener('click', () => {
        categoria.classList.toggle('mostrar-categoria') 
    })
}



