import Sugestao from "./Sugestao";


function tratarSugestao(sugestao) { 
    console.log('valor sugestao',sugestao)
    return(
    
      <Sugestao sugestao={sugestao} key={sugestao.nome}/>
    )
}


export default function Sugestoes() {

    const itensSugestao = [
        { img: "img/bad.vibes.memes.svg", nome: "bad.vibes.memes" },
        { img: "img/chibirdart.svg", nome: "chibirdart" },
        { img: "img/razoesparaacreditar.svg", nome: "razoesparaacreditar" },
        { img: "img/adorable_animals.svg", nome: "adorable_animals" },
        { img: "img/smallcutecats.svg", nome: "smallcutecats" }
    ]



    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {itensSugestao.map(function (e) {
                return tratarSugestao(e)
            })}


            {/* <div class="sugestao">
                <div class="usuario">
                    <img src="img/bad.vibes.memes.svg" />
                    <div class="texto">
                        <div class="nome">bad.vibes.memes</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src="img/chibirdart.svg" />
                    <div class="texto">
                        <div class="nome">chibirdart</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src="img/razoesparaacreditar.svg" />
                    <div class="texto">
                        <div class="nome">razoesparaacreditar</div>
                        <div class="razao">Novo no Instagram</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src="img/adorable_animals.svg" />
                    <div class="texto">
                        <div class="nome">adorable_animals</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src="img/smallcutecats.svg" />
                    <div class="texto">
                        <div class="nome">smallcutecats</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div> */}
        </div>
    );
}