

export default function Usuario(props) {

    // const usuario = prompt('Informe seu nome:');   
    // const foto = prompt('Informe sua foto de perfil:')
    
    // let foto = "img/catanacomics.svg";  


    
    let foto;
    
//    function pedirImagem() {
//        foto = prompt('Informe o link da imagem:')
//    }


   let usuario;
   let usuarioAtual = props.usuario;
   function pedirUsuario() {
       usuario = prompt('Informe o seu nome:')
       usuarioAtual = (usuario === "" || usuario === null || usuario === undefined) ? props.usuario : usuario;
       console.log('usuarioAtual', usuarioAtual);
       return usuarioAtual;

   }



    const fotoAtual = (foto === "" || foto === null || foto === undefined) ?  props.imagem : foto;
    // const usuarioAtual = (usuario === "" || usuario === null || usuario === undefined) ? props.usuario : usuario;
   

   

    return (
        <div class="usuario">
             <img src={fotoAtual} />
             {/* <img src={props.imagem} /> */}
            
                           
             
            <div class="texto">
                <strong>{props.igUsuario}</strong>
                <span>                  
                    {/* {usuarioAtual}                     */}
                    {props.usuario}
                    {/* <ion-icon name="pencil" onclick ={props.evento} ></ion-icon> */}

                    <ion-icon name="pencil" onClick={pedirUsuario}  ></ion-icon>

                    
                    
                </span>
            </div>

        </div>
    );
}


