
/*Carrosel*/
  let fotos=["calculadora", "blog","conversor","campinf","integrando","mosquito","portifolio","quimica","sitefacu","siteRock","velha"];
  let btn_proximo= document.getElementById("proximo");
  let imagens= document.createElement("img");
   imagens.src = "imagens/despesa.png";
   let car = document.getElementById("carrosel");
   car.appendChild(imagens);
      let i=-1;
   const proximo=()=>{
      if(i<fotos.length-1){
        i++
        imagens.src  = "imagens/"+ fotos[i]+".png";
        document.getElementById("carrosel").appendChild(imagens);
      }
      else if(i>=fotos.length-1){
        imagens.src="imagens/despesa.png";
        console.log(imagens.src)
        document.getElementById("carrosel").appendChild(imagens);
        i=0;
      }
    }
    /*mexer dps*/
    let btn_anterior=document.getElementById("anterior");
    const anterior=()=>{
      if(i>=0||i<=fotos.length-1){
        i--
        imagens.src  = "imagens/"+ fotos[i]+".png";
        document.getElementById("carrosel").appendChild(imagens);
        console.log(i)
      }
      if(i<=-1){
        i=0
        imagens.src="imagens/despesa.png";
        console.log(imagens.src)
        document.getElementById("carrosel").appendChild(imagens);
      }
    }
      btn_proximo.addEventListener("click",proximo);
      btn_anterior.addEventListener("click",anterior)
      window.setInterval(proximo,5000);