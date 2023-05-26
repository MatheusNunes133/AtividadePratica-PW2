import style from "./userperfil.module.css"
import cover from "../../assets/cover.svg"
import pencil from "../../assets/pencil.svg"

export default function UserPerfil() {
    return (
        <aside className={style.sidebar}>
            <img className={style['image-cover']} src={cover} alt="Background no Perfil do Usuário" />

            <div className={style.profile}>
                <img src="https://avatars.githubusercontent.com/u/80282447?v=4" alt="Perfil de Usuário" />
                <h3>Matheus Nunes</h3>

                <span>Back-end Developer</span>
            </div>

            <hr />

            <footer>
                <img src={pencil} alt="Lápis para editar" />
                <a href="#">Editar Perfil</a>
            </footer>

        </aside>
    )
}