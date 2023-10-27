import { PlusCircle } from '@phosphor-icons/react'
import style from './Main.module.css'

export function Main(){
    return (
        <div>
            <form className={style.formContainer}>
                <div className={style.contentInput}>
                    <input className={style.inputText} type="text" placeholder='Adicione uma nova tarefa' />
                    <button type='submit'>
                        criar
                        <PlusCircle size={16} weight='bold'/>
                    </button>
                </div>

                <footer>
                    <div className={style.newTasks}>
                        <span>Tarefas criadas</span>
                        <div className={style.backgroundCont}>
                            <p>0</p>
                        </div>
                    </div>

                    <div className={style.tasksCompleted}>
                        <span>Concluidas</span>
                        <div className={style.backgroundCont}>
                            <p>0</p>
                        </div>
                    </div>
                </footer>
            </form>
        </div>
    )
}