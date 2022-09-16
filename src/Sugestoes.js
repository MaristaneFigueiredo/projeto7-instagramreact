import Sugestao from "./Sugestao";





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


           { itensSugestao.map( (item) => { return  <Sugestao img={item.img} nome={item.nome}/>} )} 

           


        
        </div>
    );
}