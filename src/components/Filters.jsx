const Filters = ({setEstado}) => {
    return (
        <div className="flex justify-between items-center text-darkGrayishBlue font-bold">
        <p 
        className="mr-2 cursor-pointer hover:text-veryLightGray"
        onClick={() => setEstado('all')}
        >All</p>
        <p className="mr-2 cursor-pointer hover:text-veryLightGray"
        onClick={() => setEstado('active')}
        >Active</p>
        <p className="cursor-pointer hover:text-veryLightGray"
            onClick={() => setEstado('completed')}
        >Completed</p>
    </div>
    )
}

export default Filters
