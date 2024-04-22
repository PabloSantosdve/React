import jordan from './assets/jordan.jpg'
import './App.css'

function App() {
  const nome = "PABLÃO"

  return (
    <>
      <div>
        <img src={jordan} alt="Imagem de michael Jordan" />
      </div>
      <h1>React</h1>
      <h2>Esse é um teste para uma liçao da professora </h2>
        <p>
          Meu nome é {nome} <br />
          A soma de 6800 e 8700 é igual a: {6800+8700}
        </p>
    </>
  )
}

export default App
