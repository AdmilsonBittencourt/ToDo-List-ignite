import style from './Header.module.css'
import { Icon } from './Icon'

export function Header(){
    return(
        <header className={style.header}>
            <div className={style.content}>
                <Icon />
                <h1>
                    to
                    <p>do</p>
                </h1>
            </div>
        </header>
    )
}