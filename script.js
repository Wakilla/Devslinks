function toggleMode() {
    const html = document.documentElement

    // Codigo completo para click do botton
   // if(html.classList.contains('Light')) {
   // html.classList.remove ('Light')
   // } else {
   // html.classList.add ('Light')
   // }

   // Codigo direto (simplicado)
   html.classList.toggle('Light')


   //pegar a tag img
   const img = document.querySelector ("#profile img")

    //substituir a tag img
   if(html.classList.contains('Light')) {

    // se tiver light mode, adicionar a img light
    img.setAttribute('src', './assets/assets/avatar-Light.png')
    } else {

    // se tiver sem light mode, manter a img normal
    img.setAttribute('src','./assets/assets/avatar.png')
    
    }
   
}