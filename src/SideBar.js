import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";


export default function SideBar() {
    return(
        <div class="sidebar">
            <Usuario/>
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