import { useState } from "react";

export default function Post(props) {

    function salvarDesalvarPost(post) {
       {/* <ion-icon name="bookmark" ></ion-icon> */ }

       const novaSalvada = {...post};
       novaSalvada.foiSalvo = !novaSalvada.foiSalvo;   
       
      
       setPost(novaSalvada);
 

    }

    function curtirDescutirPost(post) {
    
      const novaCurtida = {...post};
      novaCurtida.foiCurtido = !novaCurtida.foiCurtido;      
      novaCurtida.qtdeCurtida = novaCurtida.foiCurtido ?  novaCurtida.qtdeCurtida +=1 : novaCurtida.qtdeCurtida -=1
     
      setPost(novaCurtida);

     
      
   

    }

    const [post, setPost] = useState(props);
    return (
  
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={post.img} />
            {/* {props.usuario} */}
            {post.usuario}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
  
        <div class="conteudo">
          <img src={post.conteudo} />
        </div>
  
        <div class="fundo">
          <div class="acoes">
            <div>
              {/* <ion-icon name="heart-outline" onClick={()=>curtirDescutirPost(post)}></ion-icon> */}
              <ion-icon name={(post.foiCurtido)? "heart" : "heart-outline"} style = {(post.foiCurtido)? {color:"red"}:{}}onClick={()=>curtirDescutirPost(post)}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div >              
                {/* <ion-icon name="bookmark-outline"  onClick={salvarDesalvarPost}></ion-icon>  */}
                <ion-icon name={(post.foiSalvo)? "bookmark" : "bookmark-outline"} onClick={()=>salvarDesalvarPost(post)}></ion-icon>                         
              </div>
          
  
            {/* <ion-icon name="bookmark" ></ion-icon> */ }
  
          </div>
  
          <div class="curtidas">
            <img src={post.imgCurtida} />
            <div class="texto">
              Curtido por <strong>{post.nomeCurtido}</strong> e <strong>outras {post.qtdeCurtida.toLocaleString('pt-BR')} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
        );
    }

