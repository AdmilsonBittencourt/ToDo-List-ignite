import { PlusCircle } from '@phosphor-icons/react'
import style from './Main.module.css'
import amg from '../assets/Clipboard.png'

export function Main(){
    return (
        <div className={style.container}>
            <form className={style.formContainer}>
                <div className={style.contentInput}>
                    <input className={style.inputText} type="text" placeholder='Adicione uma nova tarefa' />
                    <button type='submit'>
                        criar
                        <PlusCircle size={16} weight='bold'/>
                    </button>
                </div>
            </form>

            <section>
                <div className={style.selectionHeader}>
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
                </div>
                
                <div className={style.boxList}>
                    <img src={amg} alt="" />
                
                    <div>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div>
            </section>
        </div>
    )
}