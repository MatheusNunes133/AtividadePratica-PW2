import Avatar from "../Avatar"
import style from "./Post.module.css"

interface IPost {
    userImage: string,
    username: string,
    profession: string,
    desc: string,
    postTitle: string,
    post: string,
    anchors: string
}

export default function Post({ anchors, post, postTitle, username, userImage, profession, desc }: IPost) {
    return (
        <article>
            <section className={style.header}>
                <div className={style.avatar}>
                    <Avatar image={userImage} desc={desc} />
                    <div className={style['user-info']}>
                        <strong>{username}</strong>
                        <p>{profession}</p>
                    </div>

                </div>
                <p>Públicado há 1h</p>
            </section>

            <main>
                <h4>{postTitle}</h4>
                <p>{post}</p>
                <p className={style.anchors}>{anchors}</p>
            </main>

            <hr />

            <h4>Deixe seu feedback</h4>

            <section className={style.footer}>
                <textarea name="post" placeholder="Escreva uma mensagem..."></textarea>
                <div className={style.button}>
                    <p>Publicar</p>
                </div>
            </section>
        </article>
    )
}