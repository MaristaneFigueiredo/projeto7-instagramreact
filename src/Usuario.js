import React, { useState } from 'react';


export default function Usuario(props) {

  

    
    let foto;
    let usuario;
    
   function pedirImagem() {
       foto = prompt('Informe o link da imagem:')
       foto = (foto === "" || foto === null || foto === undefined) ?  props.imagem : foto;
       SetFoto(foto);
   }

   function pedirUsuario() {
       usuario = prompt('Informe o seu nome:')    
       usuario = (usuario === "" || usuario === null || usuario === undefined) ? props.usuario : usuario;
       SetUsuario(usuario);     

   }

//    const [variavel, NomeQAcionaOMomentoDaAtualizacao] = useState(EstadoinicialDaVariavel )
//    const [count, setCount] = useState(0); 
//    onClick={() => setCount(count + 1)}
// https://pt-br.reactjs.org/docs/hooks-state.html
  
   

//  const [variavel, NomeQAcionaOMomentoDaAtualizacao] = useState(EstadoinicialDaVariavel )
    const [usuarioAtual, SetUsuario] = useState(props.usuario); 
    const [fotoAtual, SetFoto] = useState(props.imagem); 
    
    return (
        <div class="usuario">
             <img onClick={pedirImagem} src={fotoAtual} />
             {/* <img src={props.imagem} /> */}
            
                           
             
            <div class="texto">
                <strong>{props.igUsuario}</strong>
                <span>                  
                    {usuarioAtual}                    
                 
                    {/* <ion-icon name="pencil" onclick ={props.evento} ></ion-icon> */}

                    <ion-icon name="pencil" onClick={pedirUsuario}  ></ion-icon>

                    
                    
                </span>
            </div>

        </div>
    );
}


