
function exibirStory(item) {
 return (


    <div class="story">
    <div class="imagem">
      <img src={item.img} />
    </div>
    <div class="usuario">
      {item.usuario}
    </div>
  </div>
  )
}


export default function Story() {

  let itensStory = [
    { img: "img/9gag.svg", usuario: "9gag" },
    { img: "img/meowed.svg", usuario: "meowed" },
    { img: "img/barked.svg", usuario: "barked" },
    { img: "img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet" },
    { img: "img/wawawicomics.svg", usuario: "wawawicomics" },
    { img: "img/respondeai.svg", usuario: "respondeai" },
    { img: "img/filomoderna.svg", usuario: "filomoderna" },
    { img: "img/memeriagourmet.svg", usuario: "memeriagourmet" }
  ]




  return (

    <>
      {itensStory.map(exibirStory)}
    </>
   




    //     <div class="story">
    //     <div class="imagem">
    //       <img src="img/9gag.svg" />         
    //     </div>
    //     <div class="usuario">
    //       9gag
    //     </div>
    //   </div>



  );
}