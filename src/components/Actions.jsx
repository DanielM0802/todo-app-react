import Filters from "./Filters"

const Actions = ({hayTareas, setEstado, eliminarCompletadas, restantes}) => {
    return (
        hayTareas ?
        <div className="bg-veryDarkDesaturatedBlue flex justify-between p-2 text-darkGrayishBlue mb-10 rounded-b-md overflow-hidden shadow-xl">
            <p>{restantes + ''} items left</p>
            <div className="hidden sm:block">
                <Filters
                    setEstado={setEstado}
                />
            </div>
            <p
                className="cursor-pointer hover:text-veryLightGray"
                onClick={eliminarCompletadas}
            >Clear Completed</p>
        </div>
        : null
    )
}

export default Actions
