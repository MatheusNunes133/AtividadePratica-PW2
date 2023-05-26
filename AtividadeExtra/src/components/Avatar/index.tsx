interface IPropsAvatar {
    image: string,
    desc: string
}

import style from "./avatar.module.css"

export default function Avatar({ image, desc }: IPropsAvatar) {
    return (
        <div className={style.profile}>
            <img src={image} alt={desc} />
        </div>
    )

}