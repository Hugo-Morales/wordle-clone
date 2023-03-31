import { MdClose } from "react-icons/md";

export default function Modal({ isOpen, toggle }) {
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
                <div className="relative flex flex-col h-full bg-white shadow-xl">
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
                    <div className="flex-1 h-0 overflow-y-auto">
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
}
