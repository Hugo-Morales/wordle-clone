import React from "react";
import { MdClose } from "react-icons/md";
import { Transition } from "@headlessui/react";

export default function Modal({ isOpen, toggle }) {
    const correct = ["Y", "U", "D", "A"];
    const close = ["C", "I", "N", "C", "O"];
    const error = ["J", "U", "G", "A", "R"];

    return (
        <Transition show={isOpen} as={React.Fragment}>
            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen">
                    <Transition.Child
                        as={React.Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    </Transition.Child>

                    <Transition.Child
                        as={React.Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="px-6 py-4 bg-white rounded-[15px] w-[450px]">
                            <div className="flex justify-between items-center gap-4">
                                <h2 className="text-lg font-medium text-gray-900">
                                    ¿Cómo jugar?
                                </h2>
                                <button
                                    className="text-gray-700 hover:text-gray-600 transition ease-in-out duration-150"
                                    onClick={toggle}
                                >
                                    <span className="sr-only">Close modal</span>
                                    <MdClose className="text-[25px]" />
                                </button>
                            </div>
                            {/* Contenido */}
                            <div className="mt-3 px-2">
                                <h4 className="text-left">
                                    Adivina la palabra oculta en 6 intentos.
                                </h4>
                                <div className="text-left pl-8">
                                    <ul className="list-disc ">
                                        <li>
                                            Cada conjetura debe ser una palabra
                                            válida de 5 letras.
                                        </li>
                                        <li>
                                            El color de los mosaicos cambiará
                                            para mostrar qué tan cerca estuvo su
                                            suposición de la palabra.
                                        </li>
                                    </ul>
                                </div>
                                {/* Ejemplo 1 */}
                                <div className="flex flex-col justify-start text-start mt-3">
                                    <div className="underline">Ejemplo:</div>
                                    <div className="flex gap-[5px]">
                                        <div className="h-10 w-10">
                                            <div className="w-full inline-flex justify-center items-center bg-correct font-bold align-middle box-border select-none uppercase text-[1.4rem] before:contents-[''] before:pb-[100%] before:inline-flex">
                                                A
                                            </div>
                                        </div>
                                        {correct?.map((obj, index) => (
                                            <div
                                                className="h-10 w-10"
                                                key={index}
                                            >
                                                <div className="w-full inline-flex justify-center items-center border-2 font-bold align-middle box-border select-none uppercase text-[1.4rem] before:contents-[''] before:pb-[100%] before:inline-flex">
                                                    {obj}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <span>
                                        La letra A está en la palabra y en el
                                        lugar correcto.
                                    </span>
                                </div>
                                {/* Ejemplo 2 */}
                                <div className="flex flex-col justify-start text-start mt-3">
                                    <div className="underline">Ejemplo:</div>
                                    <div className="flex gap-[5px]">
                                        {close?.map((obj, index) => (
                                            <div
                                                className="h-10 w-10"
                                                key={index}
                                            >
                                                <div
                                                    className={
                                                        "w-full inline-flex justify-center items-center border-2 font-bold align-middle box-border select-none uppercase text-[1.4rem] before:contents-[''] before:pb-[100%] before:inline-flex " +
                                                        (obj === "I"
                                                            ? "bg-close"
                                                            : "")
                                                    }
                                                >
                                                    {obj}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <span>
                                        La letra I está en la palabra pero en el
                                        lugar equivocado.
                                    </span>
                                </div>
                                {/* Ejemplo 3 */}
                                <div className="flex flex-col justify-start text-start mt-3">
                                    <div className="underline">Ejemplo:</div>
                                    <div className="flex gap-[5px]">
                                        {error?.map((obj, index) => (
                                            <div
                                                className="h-10 w-10"
                                                key={index}
                                            >
                                                <div
                                                    className={
                                                        "w-full inline-flex justify-center items-center border-2 font-bold align-middle box-border select-none uppercase text-[1.4rem] before:contents-[''] before:pb-[100%] before:inline-flex " +
                                                        (obj === "A"
                                                            ? "bg-error"
                                                            : "")
                                                    }
                                                >
                                                    {obj}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <span>
                                        La letra I está en la palabra pero en el
                                        lugar equivocado.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </div>
        </Transition>
    );
}
