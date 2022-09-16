

export default function Story(props) {
    // console.log('props', props);
    return (
        <div class="story">
        <div class="imagem">
            <img src={props.img}/>
        </div>
        <div class="usuario">
            {props.usuario}
        </div>
    </div>
    );
}
