import React from "react";
import { MdClose } from "react-icons/md";
import { Transition } from "@headlessui/react";

export default function Stats({ isOpen, toggle }) {
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
                                    Estadística
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
                            <div className="mt-3 px-2">Partidas</div>
                        </div>
                    </Transition.Child>
                </div>
            </div>
        </Transition>
    );
}
