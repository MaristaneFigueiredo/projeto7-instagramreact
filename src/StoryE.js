

export default function Story(story) {
    

    return (


        <div class="story">
            <div class="imagem">
                <img src={story.story.img}/>
            </div>
            <div class="usuario">
                {story.story.usuario}
            </div>
        </div>
    )

}