import { useState } from "react";
import Cross from "./icons/Cross"
import Check from "./icons/Check"

const Tarea = ({tarea, tareas, setTareas, eliminarTarea}) => {
   const {contenido, id} = tarea;

   const changeStatus = () => {
        const actualizar = tareas.find( t => t.id === tarea.id);
        actualizar.isCompleted = !actualizar.isCompleted;
        const nuevasTareas = tareas.map( t => t.id ===tarea.id ? actualizar : t );
        setTareas(nuevasTareas);
    }

    const [selected, setSelected] = useState(false);

    const handleEliminar = () => {
        eliminarTarea(id);
    }

    return (
        <div className="todo "
            onMouseEnter={ () => { setSelected(true) } }
            onMouseLeave={ () => { setSelected(false) } }
        >
                <div 
                    className="flex justify-start items-center text-veryLightGray w-11/12 ml-6"
                    onClick={changeStatus}
                >
                    {
                        tarea.isCompleted ? 
                        <div className="circle bg-gradient-to-br from-startGradient to-endGradient flex justify-center items-center">
                            <Check
                            />
                        </div>
                        :
                        selected ?
                            <div className="circle bg-gradient-to-br from-startGradient to-endGradient flex justify-center items-center">
                                <div className="w-[22px] h-[22px] rounded-full bg-veryDarkDesaturatedBlue" ></div>
                            </div>
                        : 
                        <div className="circle border-2 border-darkGrayishBlue"></div>
                    }
                    
                    {
                    tarea.isCompleted ?
                    <p className="ml-4 line-through text-darkGrayishBlue " >{contenido}</p>
                    :
                    <p className="ml-4 truncate" >{contenido}</p>
                    }    
                </div>
               {selected ? 
               <div onClick={handleEliminar} className="mr-4" >
                <Cross/>
               </div>
               : 
               <div onClick={handleEliminar} className="mr-4 show hidden " >
                <Cross/>
               </div>
               }
        </div>
    )
}

export default Tarea
