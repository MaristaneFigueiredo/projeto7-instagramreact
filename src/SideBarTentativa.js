import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";




let usuario;
// let usuarioAtual;

let usuarioInformado;


function pedirUsuario() {
    usuarioInformado = prompt('Informe o seu nome:')   
    return usuarioInformado;

}


// usuarioAtual = (usuario === "" || usuario === null || usuario === undefined) ? "Catana" : usuario;
usuario =  (usuarioInformado === "" || usuarioInformado === null || usuarioInformado === undefined) ? "Catana" : usuarioInformado;

export default function SideBar() {
    return(
        <div class="sidebar">
            {/* <Usuario usuario={"Catana"} imagem={"img/catanacomics.svg"} igUsuario = {"catanacomics"} evento = {pedirUsuario}/> */}
            {/* <Usuario usuario={"Catana"} imagem={"img/catanacomics.svg"} igUsuario = {"catanacomics"}/> */}
            <Usuario usuario={usuario} imagem={"img/catanacomics.svg"} igUsuario = {"catanacomics"}/>
           {/* Fim div usuario */} 
           
            <Sugestoes/>
          {/* Fim div sugestoes */}

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
        
    );
}