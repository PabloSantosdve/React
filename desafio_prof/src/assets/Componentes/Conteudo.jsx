import styles from'./Conteudo.module.css'
import jordan3 from '../imagens/jordan4.jpg'

function Conteudo(){
	return(
		<div>

		<h1 className={styles.titulo}>Conteudo da pagina</h1>

		<p className={styles.texto}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum delectus enim ipsam ea consequuntur nostrum, amet ducimus sed magni exercitationem tempore quam dolorum odit voluptates fugit? Omnis neque consectetur placeat.</p>

		<p className={styles.texto}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatum fugit officia maiores incidunt ex odit assumenda ducimus possimus, nemo nobis sapiente rerum recusandae dolorum fugiat voluptates, illum hic doloremque.</p>

		<img className="tamanho" src={jordan3} alt="" />

	</div>
	)
}
export default Conteudo