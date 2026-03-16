const Noticia = ({noticia}: NoticiaProps) => {
  return (
    <div>
      <h2>{noticia.titulo}</h2>
      <p>{noticia.contenido}</p>
    </div>
  )
}

export default Noticia

interface NoticiaProps {
  noticia: any
}