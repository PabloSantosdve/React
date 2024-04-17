import styles from './Footer.module.css'
import Nike from '../imagens/logo.jpg'
function Rodape(){
	return(
		<div>
		<footer className={styles}>
		<img src={Nike} className='imagem' alt="Logo do site" />
		<h2>Esse é o footer</h2>
		</footer>
		</div>
	)
}

export default Rodape