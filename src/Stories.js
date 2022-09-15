 import Story from "./Story";


export default function Stories() {

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
    <div class="stories">      
  
    {itensStory.map ( function(item) {
      // {console.log('valor item',item)}
       return <Story img={item.img} usuario={item.usuario} /> 
    }) }


   
    

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>

  )
}