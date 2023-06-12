function toggleMode() {
  const html = document.documentElement
  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // } else{
  //   html.classList.add('light')
  // }
  html.classList.toggle("light")

  //pegar a tag da img
  const img = document.querySelector("#profile img")

  //substituir a img
  if(html.classList.contains("light")){
    img.setAttribute("src", 'assets/Avatar-light.png')
  } else{
    img.setAttribute("src","assets/Avatar.png")
  }
}
