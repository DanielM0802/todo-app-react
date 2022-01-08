import {useState} from 'react';
import Actions from './components/Actions';
import Filters from './components/Filters';
import Header from "./components/Header"
import Input from './components/Input';
import ListadoTareas from './components/ListadoTareas';
import background from './img/bg-desktop-dark.jpg'

function App() {

  const example = [
    {
        "contenido": "Complete online JavaScript course",
        "isCompleted": true,
        "id": "ky57l06p44vdglrbd57"
    },
    {
        "contenido": "Jog around the park 3x",
        "isCompleted": false,
        "id": "ky57l5kxk05x3jimn"
    },
    {
        "contenido": "10 minutes meditation",
        "isCompleted": false,
        "id": "ky57layq4owjfill8rc"
    },
    {
        "contenido": "Read for 1 hour",
        "isCompleted": false,
        "id": "ky57l2yq4oxjfil28rc"
    },
    {
        "contenido": "Pick up groceries",
        "isCompleted": false,
        "id": "ky57lgz7ucg8ym7bm5"
    },
    {
        "contenido": "Complete Todo App on Frontend Mentor",
        "isCompleted": false,
        "id": "ky57lqa29doaq9t61b8"
    }
]

  const [tareas, setTareas] = useState(example);
  const [estado, setEstado] = useState('all');

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter( tarea => tarea.id !== id );
    setTareas(tareasActualizadas);
  }

  const eliminarCompletadas = () => {
    const tareasActualizadas = tareas.filter( tarea => !tarea.isCompleted );
    setTareas(tareasActualizadas);
  }

  const getRestantes = () => {
    const tareasActivas = tareas.filter( tarea => !tarea.isCompleted );
    return tareasActivas.length;
  }

  return (
    <div 
      style={{ backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat', backgroundSize:'contain'}}
      className="bg-veryDarkBlue flex flex-col h-auto min-h-screen "
    >
    <div className="container mx-auto pt-10  w-5/6 md:w-3/6 ">
        <Header/>
          <Input
            tareas={tareas}
            setTareas={setTareas}
          />
          <ListadoTareas
            tareas={tareas}
            setTareas={setTareas}
            estado={estado}
            eliminarTarea={eliminarTarea}
          />
          <Actions
            hayTareas={ tareas.length>0}
            setEstado={setEstado}
            eliminarCompletadas={eliminarCompletadas}
            restantes={getRestantes()}
          />
          <div className="show hidden py-3 rounded-md mx-auto bg-veryDarkDesaturatedBlue mb-10">
            <div className="flex justify-center">
            <Filters
              setEstado={setEstado}
            />
            </div>
          </div>
    </div>
    </div>
    )
}

export default App
