import { Trash } from "@phosphor-icons/react"
import style from './Tesk.module.css'
import { Checkbox } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';


export function Tesk({ taskId, content, onDelete }){

    function handleDeleteTask(){
        onDelete(taskId)
        console.log(content)
    }

    return(
        <div className={style.containerTask}>
            
            <div >
                <Checkbox 
                shape="round" 
                icon={<i className="fa-solid fa-check"/>}
                color="primary-o"
                ></Checkbox>
            </div>
            
            <div className={style.contentTask}>
                <p>{content}</p>
            </div>

            <button onClick={handleDeleteTask} >
                <Trash 
                size={20}
                />
            </button>
        </div>
    )
}