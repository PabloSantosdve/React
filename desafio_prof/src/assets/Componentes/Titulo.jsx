import logo from '../imagens/logo.jpg'
import './titulo.module.css'


function titulo(){
	return(
		<header>
		<div>
			<img src={logo} alt="logo nike" />
			<h1>NIKE</h1>
		</div>
		<nav>
			<a href="">Eportivos</a>
			<a href="">Jordan</a>
			<a href="">Strett</a>
			<a href="">Contate nós</a>
		</nav>
		</header>
	)
}
export default titulo