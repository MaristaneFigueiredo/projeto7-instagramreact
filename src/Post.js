
export default function Post(props) {

    function salvarPost() {
       {/* <ion-icon name="bookmark" ></ion-icon> */ }

    }

    function curtirPost() {
    
      //Colorir de Vermelho e descolir e contar e descontar a quantidade de curtidade
      // <ion-icon name="heart"></ion-icon>
      
      // const QtdeCurtida = Number((elemento.textContent.substring(3,7)).replace(',' , '.')); 

      const QtdeCurtida = Number(props.qtdeCurtida + 1); 
      console.log(QtdeCurtida)

    }


    return (
  
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.img} />
            {props.usuario}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
  
        <div class="conteudo">
          <img src={props.conteudo} />
        </div>
  
        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline" onClick={curtirPost}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div onClick="preencheCor()">              
                <ion-icon name="bookmark-outline"  onClick={salvarPost}></ion-icon>                          
              </div>
            {/* <div>{preencherCor(post.post)}</div> */}
  
            {/* <ion-icon name="bookmark" ></ion-icon> */ }
  
          </div>
  
          <div class="curtidas">
            <img src={props.imgCurtida} />
            <div class="texto">
              Curtido por <strong>{props.nomeCurtido}</strong> e <strong>outras {props.qtdeCurtida} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
        );
    }



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
