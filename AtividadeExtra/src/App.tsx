import Header from './components/Header'
import UserPerfil from './components/UserPerfil'
import Post from './components/Post';
import "./App.css";

function App() {

  return (
    <>
      <Header />

      <div className="conteudo">
        <UserPerfil />

        <main>
          <Post userImage='https://avatars.githubusercontent.com/u/80282447?v=4'
            username='Matheus Nunes'
            profession='Back-end Developer'
            desc='Imagem com perfil'
            postTitle='Falaaa Galeraa!!'
            post='Acabei de realizar a atividade extra da disciplina de PW2!'
            anchors='#typescript #React #vite'
          />
        </main>
      </div>

    </>
  )
}

export default App
