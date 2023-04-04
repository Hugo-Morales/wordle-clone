import { MdClose } from "react-icons/md";

export default function OffCanvas({ isOpen, toggle }) {
    return (
        <>
            {/* Fondo oscuro detrás del offcanvas */}
            <div
                className={`fixed inset-0 z-40 transition-opacity ${
                    isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
                } bg-black`}
                onClick={toggle}
            />

            {/* Menu */}
            <div
                className={`fixed inset-y-0 z-50 transition-all w-[400px] ease-out duration-400 transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="relative flex flex-col h-full bg-white shadow-xl dark:bg-darkMode">
                    {/* Botón para cerrar el offcanvas */}
                    <div className="flex justify-between items-center mt-6 mx-6">
                        <h1 className="font-bold text-[20px]">Games</h1>
                        <button
                            onClick={toggle}
                            className="text-[20px] border-2 rounded-lg p-2"
                        >
                            <MdClose />
                        </button>
                    </div>

                    {/* Contenido del offcanvas */}
                    <nav className="overflow-y-auto flex flex-col grow h-full">
                        <>
                            <div className="p-2 w-full flex grow flex-col">
                                <ul className="flex flex-col justify-center">
                                    <li className="hover:bg-gray-300 p-2">
                                        <a aria-current="page" href="#">
                                            Home
                                        </a>
                                    </li>
                                    <li className="hover:bg-gray-300 p-2">
                                        <a href="#">...</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-gray-500 text-[15px] flex justify-end">
                                <span className="text-center w-full">
                                    Clon de Wordle hecho por Hugo Mauricio
                                    Morales
                                </span>
                            </div>
                        </>
                    </nav>
                </div>
            </div>
        </>
    );
}
