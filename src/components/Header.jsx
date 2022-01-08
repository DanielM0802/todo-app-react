import Sun from "./icons/Sun";

function Header() {
    return (
        <header>
            <div className="flex justify-between mb-8">
                <h1 className="text-veryLightGray text-4xl text-left uppercase font-bold tracking-[10px]">todo</h1>
                <Sun/>
            </div>
        </header>
    )

}

export default Header;