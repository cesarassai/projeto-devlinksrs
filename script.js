function toggleMode() {
  const html = document.documentElement
  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
TODA ESSA LOGICA PODE SER SUBSTITUIDA POR ESSA FUNÇÃO ESPECIFICA
  */
  html.classList.toggle("light")

  /* alterando a imagem modo dark e modo light*/
 const img = document.querySelector("#profile img")

 // substituir a imagem
 if (html.classList.contains("light")) {
   // se tiver light mode, adicionar a imagem light
   img.setAttribute("src", "./assets/assets/avatar-light.png")
 } else {
   // set tiver sem light mode, manter a imagem normal
   img.setAttribute("src", "./assets/assets/avatar.png")
 }
  
}
