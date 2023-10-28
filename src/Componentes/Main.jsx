import { PlusCircle } from '@phosphor-icons/react'
import style from './Main.module.css'
import amg from '../assets/Clipboard.png'
import { useState } from 'react'
import { Tesk } from './Tesk';

import { v4 as uuidv4 } from 'uuid';


export function Main(){

    const [task, setTask] = useState([
        {
            id: uuidv4,
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsum velit, aut porro ipsa, facilis commodi.',
            isCompleted: false
        },
        {
            id: 'sss',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsum velit, aut porro ipsa, facilis commodi.',
            isCompleted: false
        },
    ])

    const [taskText, setTaskText] = useState('')

    function addNewTask(){
        event.preventDefault();

        const newTask = {
            id: uuidv4,
            content: taskText,
            isCompleted: false,
        }

        setTask([...task, newTask])
    }

    function taskNewValueChange(){
        setTaskText(event.target.value)
    }

    return (
        <div className={style.container}>
            <form  onSubmit={addNewTask} className={style.formContainer}>
                <div className={style.contentInput}>
                    <input className={style.inputText} 
                        type="text" 
                        placeholder='Adicione uma nova tarefa' 
                        name='inputText'
                        onChange={taskNewValueChange}
                    />
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
                
                <div className={task.length == 0? style.boxList : style.boxListNone}>
                    <img src={amg} alt="" />
                
                    <div>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div>
            </section>

            {
                task.map(({id, content, isCompleted}) => {
                    return (
                        <Tesk
                        key={id}
                        content={content}
                        isCompleted={isCompleted}
                        />
                    )
                })
            }

        </div>
    )
}