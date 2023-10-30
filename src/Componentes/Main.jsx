import { PlusCircle } from '@phosphor-icons/react'
import style from './Main.module.css'
import amg from '../assets/Clipboard.png'
import { useState } from 'react'
import { Tesk } from './Tesk';


export function Main(){

    const [task, setTask] = useState([])

    const [taskText, setTaskText] = useState('')

    const [tasksCreated, setTasksCreated] = useState(0)

    const [taskCompleted, setTaskCompleted] = useState(0)

    function addNewTask(){
        event.preventDefault();

        const newTask = {
            id: task.length + 1,
            content: taskText,
            isCompleted: false,
        }

        setTask([...task, newTask])
        setTaskText('')
        contTask()
    }

    function contTask(){
        setTasksCreated((state) => {
            return state + 1;
        })
    }
 

    function taskNewValueChange(){
        event.target.setCustomValidity('')
        setTaskText(event.target.value)
        
    }

    function inputValid(){
        event.target.setCustomValidity("Campo obrigatorio!")
    }

    function deleteTask(id){
        const newToDoList = task.filter((task) => {
            return task.id != id;
        })
      
        setTask(newToDoList)
        setTasksCreated(tasksCreated - 1)
    }

    function addTaskCompleted(){
        setTaskCompleted((state) => {
            return state + 1;
        })
    }

    function removeTaskCompleted(){
        setTaskCompleted((state) => {
            return state - 1
        })
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
                        value={taskText}
                        onInvalid={inputValid}
                        required
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
                            <p>{tasksCreated}</p>
                        </div>
                    </div>

                    <div className={style.tasksCompleted}>
                        <span>Concluidas</span>
                        <div className={style.backgroundCont}>
                            <p>{taskCompleted}</p>
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

           <div>
           {
                task.map(({id, content, isCompleted}) => {
                    return (
                        <Tesk
                            key={id}
                            taskId={id}
                            content={content}
                            isCompleted={isCompleted}
                            onDelete={deleteTask}
                            addNewTaskComplet={addTaskCompleted}
                            removeTaskComplet={removeTaskCompleted}
                        />
                    )
                })
            }
           </div>

        </div>
    )
}