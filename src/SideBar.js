import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";





// function pedirUsuario() {
//   let usuarioPrompt;
//    usuarioPrompt = prompt('Informe o seu nome:')
//    return usuarioPrompt; 
// }



export default function SideBar() {
    return(
        <div class="sidebar">
            {/* <Usuario usuario={"Catana"} imagem={"img/catanacomics.svg"} igUsuario = {"catanacomics"} evento = {pedirUsuario}/> */}
            <Usuario usuario={"Catana"} imagem={"img/catanacomics.svg"} igUsuario = {"catanacomics"}/>
           {/* Fim div usuario */} 
            
            <Sugestoes/>          

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
        
    );
}