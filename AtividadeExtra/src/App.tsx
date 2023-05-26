import Header from './components/Header'
import UserPerfil from './components/UserPerfil'
import "./App.css";

function App() {

  return (
    <>
      <Header />

      <div className="conteudo">
        <UserPerfil />

        <main>
          <h1>Aqui fica o Post</h1>
        </main>
      </div>

    </>
  )
}

export default App
