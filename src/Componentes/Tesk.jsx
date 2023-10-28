import { Trash } from "@phosphor-icons/react"
import style from './Tesk.module.css'

import { Checkbox } from 'pretty-checkbox-react';

import '@djthoms/pretty-checkbox';

// eslint-disable-next-line react/prop-types
export function Tesk({ content }){
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

            <button>
                <Trash size={20} />
            </button>
        </div>
    )
}