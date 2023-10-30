import { Trash } from "@phosphor-icons/react"
import style from './Tesk.module.css'
import { Checkbox } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import { useState } from "react";


export function Tesk({ taskId, content, onDelete, addNewTaskComplet, removeTaskComplet }){

    const [checkedBox, setCheckedBox] = useState(false)

    function handleDeleteTask(){
        onDelete(taskId)
        console.log(event.target)
    }

    function checkInput(){
        const booleanCheck = event.target.checked;
        setCheckedBox(booleanCheck)

        if (booleanCheck == true){
            addNewTaskComplet()
        } else {
            removeTaskComplet()
        }
    }
 
    return(
        <div className={style.containerTask}>
            
            <div >
                <Checkbox 
                    shape="round" 
                    icon={<i className="fa-solid fa-check"/>}
                    color="primary-o"
                    onChange={checkInput}
                />
            </div>
            
            <div className={style.contentTask}>
                <p className={checkedBox == false ? style.paragraph : style.checkedText}>{content}</p>
            </div>

            <button onClick={handleDeleteTask} >
                <Trash 
                size={20}
                />
            </button>
        </div>
    )
}