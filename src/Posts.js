import Post from "./Post";


function tratarPost(post) { 
    console.log('valor post',post)
    return(
    
      <Post post={post} key={post.usuario}/>
    )
}



export default function Posts() {

  const itensPost = [      
    { img: "img/meowed.svg", usuario: "meowed", conteudo: "img/gato-telefone.svg",imgCurtida:"img/respondeai.svg",nomeCurtido:"respondeai", qtdeCurtida:101.523},
    { img: "img/barked.svg", usuario: "barked", conteudo: "img/dog.svg",imgCurtida:"img/adorable_animals.svg",nomeCurtido:"adorable_animals", qtdeCurtida:99.159}
  ]


  return (
    <div class="posts">      
    

      {itensPost.map(function(e) {
        return tratarPost(e)
      }) }



      {/* <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src="img/meowed.svg" />
            meowed
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src="img/gato-telefone.svg" />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src="img/respondeai.svg" />
            <div class="texto">
              Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src="img/barked.svg" />
            barked
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src="img/dog.svg" />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src="img/adorable_animals.svg" />
            <div class="texto">
              Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  );
}