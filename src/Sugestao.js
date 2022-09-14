export default function Sugestao(sugestao) {
    return(
        <div class="sugestao">
        <div class="usuario">
            <img src={sugestao.sugestao.img} />
            <div class="texto">
                <div class="nome">{sugestao.sugestao.nome}</div>
                <div class="razao">Segue você</div>
            </div>
        </div>

        <div class="seguir">Seguir</div>
    </div>
    );
}
