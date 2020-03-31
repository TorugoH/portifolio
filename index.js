function escrever(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 150 * i);
    })
  }
  const s=document.querySelector('.s')
  const u=document.querySelector('.u')
  const b=document.querySelector('.b')
  const tituloPrincipal=document.querySelector('span')
  const titulo = document.querySelector('h2')
  escrever(titulo)
  escrever(tituloPrincipal)
  escrever(s)
  escrever(u)
  escrever(b)