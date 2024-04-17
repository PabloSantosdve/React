import logo from '../imagens/logo.jpg'
import './titulo.module.css'


function titulo(){
	return(
		<header>
		<img src={logo} alt="logo nike" />
		<h1>Nike</h1>
		</header>
	)
}
export default titulo