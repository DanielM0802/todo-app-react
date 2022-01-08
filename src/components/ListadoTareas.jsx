import Tarea from "./Tarea"

const ListadoTareas = ({tareas, setTareas, estado, eliminarTarea}) => {

    const filtrarTareas = () => {
        if(estado === 'all'){
            return tareas;
          }
          let tareasFiltradas;
          estado === 'active' 
          ?
            tareasFiltradas = tareas.filter( tarea => !tarea.isCompleted)
          :
            tareasFiltradas = tareas.filter( tarea => tarea.isCompleted)
          return tareasFiltradas;
    }

    const tareasVisibles = filtrarTareas();
    return (
        <div className="rounded-t-md overflow-hidden">
        {
            tareasVisibles.map( tarea => (
                <Tarea
                    key={tarea.id}
                    tarea = {tarea}
                    tareas={tareas}
                    setTareas={setTareas}
                    eliminarTarea={eliminarTarea}
                 />
            ))
        }
        </div>
    )
}
export default ListadoTareas
