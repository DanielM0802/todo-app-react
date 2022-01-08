import {useState} from 'react'


const Input = ({tareas, setTareas}) => {

    const [contenido, setContenido] = useState('');

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);
        return fecha + random;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(contenido.trim() === ''){
            alert('Campo vacío!')
            return;
        }

        const tarea = {
            contenido, 
            isCompleted : false,
            id: generarId()
        }

        setTareas([...tareas, tarea]);

        //Resetear Form
        setContenido('');
    }


    return (
        <div className="mb-5">

            <form 
            onSubmit={handleSubmit}
            className="bg-veryDarkDesaturatedBlue rounded-md py-6"
            >
                <div>
                    <label htmlFor="todo"></label>
                    <div className="flex ml-6">
                    <div className="border-2 border-darkGrayishBlue circle mr-4"></div>
                        <input  
                                id="todo"
                                type="text"
                                placeholder="Create a new todo..."
                                className="bg-veryDarkDesaturatedBlue w-10/12 placeholder-darkGrayishBlue rounded-sm focus:outline-none text-veryLightGray"
                                value={contenido}
                                onChange={ e => setContenido(e.target.value) } 
                        />
                   </div>
                </div>
            </form>
        </div>
    )
}

export default Input
