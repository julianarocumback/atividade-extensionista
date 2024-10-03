// Mostrar menu

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