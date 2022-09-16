import Post from "./Post";


export default function Posts() {

    const itensPost = [      
      { img: "img/meowed.svg", usuario: "meowed", conteudo: "img/gato-telefone.svg",imgCurtida:"img/respondeai.svg",nomeCurtido:"respondeai", qtdeCurtida:101523, foiCurtido:false, foiSalvo:false},
      { img: "img/barked.svg", usuario: "barked", conteudo: "img/dog.svg",imgCurtida:"img/adorable_animals.svg",nomeCurtido:"adorable_animals", qtdeCurtida:99159, foiCurtido:false, foiSalvo:false}
    ]
  
  
    return (
      <div class="posts">      
      
      {itensPost.map ( function(item) {
      // {console.log('valor item',item)}
       return <Post img={item.img} usuario={item.usuario} conteudo={item.conteudo} imgCurtida={item.imgCurtida} nomeCurtido={item.nomeCurtido} qtdeCurtida={item.qtdeCurtida} foiCurtido={item.foiCurtido} foiSalvo={item.foiSalvo}/> 
    }) }
   


   
    </div>
  );
}  