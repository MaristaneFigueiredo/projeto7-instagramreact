
// import postsSalvos from "./postsSalvos";
// {/* <ion-icon name="bookmark" ></ion-icon> */ }

// function ehPostSalvo(post) {
//   return postsSalvos.has(post)
// }

// function salvarPost(post) {
//   postsSalvos.add(post)
//   console.log('postssalvos =', postsSalvos)
  
  
// }

// function preencherCor(post) {
//   //console.log('post preencherCor=', post)
  
//   console.log('postsSalvos =', postsSalvos )

//   if (ehPostSalvo(post)) {
//     return (
//       <>
//         <div style={{ display: 'none' }} >
//           <ion-icon name="bookmark-outline" onClick={() => salvarPost(post)} ></ion-icon>
//         </div>
//         <div style={{ display: 'display' }} >
//           <ion-icon name="bookmark" onClick={() => salvarPost(post)} ></ion-icon>
//         </div>


//       </>
//     )

//   }
//   else {
//     return (
//       <>
//         <div style={{ display: 'display' }} >
//           <ion-icon name="bookmark-outline" onClick={() => salvarPost(post)} ></ion-icon>
//         </div>
//         <div style={{ display: 'none' }} >
//           <ion-icon name="bookmark" onClick={() => salvarPost(post)} ></ion-icon>
//         </div>


//       </>
//     )

//   }

// }

export default function Post(post) {
  return (

    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={post.post.img} />
          {post.post.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={post.post.conteudo} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div onClick="preencheCor()">              
              <ion-icon name="bookmark-outline"></ion-icon>                          
            </div>
          {/* <div>{preencherCor(post.post)}</div> */}



        </div>

        <div class="curtidas">
          <img src={post.post.imgCurtida} />
          <div class="texto">
            Curtido por <strong>{post.post.nomeCurtido}</strong> e <strong>outras {post.post.qtdeCurtida} pessoas</strong>
          </div>
        </div>
      </div>
    </div>


    //     <div class="post">
    //     <div class="topo">
    //       <div class="usuario">
    //         <img src="img/barked.svg" />
    //         barked
    //       </div>
    //       <div class="acoes">
    //         <ion-icon name="ellipsis-horizontal"></ion-icon>
    //       </div>
    //     </div>

    //     <div class="conteudo">
    //       <img src="img/dog.svg" />
    //     </div>

    //     <div class="fundo">
    //       <div class="acoes">
    //         <div>
    //           <ion-icon name="heart-outline"></ion-icon>
    //           <ion-icon name="chatbubble-outline"></ion-icon>
    //           <ion-icon name="paper-plane-outline"></ion-icon>
    //         </div>
    //         <div>
    //           <ion-icon name="bookmark-outline"></ion-icon>
    //         </div>
    //       </div>

    //       <div class="curtidas">
    //         <img src="img/adorable_animals.svg" />
    //         <div class="texto">
    //           Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

  );
}