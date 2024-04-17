import './App.css'
import jordan from '../src/assets/imagens/jordan.jpg' //está trazendo a imagem
import michael from '../src/assets/imagens/jordan2.jpg'
import Titulo from '../src/assets/Componentes/Titulo' // esta trazendo o componente header


function App() {
  const nome = "Pablão"
  
  function somatoria(a,b){
    return a + b
  }

  
  return (
    <>
      <Titulo />    
      <img src={jordan} className='tamanho' alt="imagem do michael jordan" />
      <img src={michael} className='tamanho' alt="imagem michael jordan" />

      <h2>Olá meu nome é: {nome}</h2>

      <p>Exibição da soma de um numero 5 + 10 = {5+10}</p>

      <p>soma usando função {somatoria(8,12)}</p>
    </>
  )
}

export default App
