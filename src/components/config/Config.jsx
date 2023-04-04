import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { Switch, Transition } from "@headlessui/react";

export default function Config({ isOpen, toggle }) {
    const [enabled, setEnabled] = useState(false);

    // if local storage is empty save theme as light
    useEffect(() => {
        if (localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", "light");
        }
    }, []);

    useEffect(() => {
        // select html elem
        const html = document.querySelector("html");
        if (localStorage.getItem("theme") === "dark") {
            html.classList.add("dark");
            setEnabled(true);
        } else {
            html.classList.remove("dark");
            setEnabled(false);
        }
    }, [enabled]);

    // handle switch theme
    const toggleDarkMode = () => {
        if (localStorage.getItem("theme") === "light") {
            setEnabled(true);
            localStorage.setItem("theme", "dark");
        } else {
            setEnabled(false);
            localStorage.setItem("theme", "light");
        }
    };

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
                        <div className="px-6 py-4 bg-white dark:bg-darkMode rounded-[15px] w-[450px]">
                            <div className="flex justify-between items-center gap-4">
                                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                                    Configuración
                                </h2>
                                <button
                                    className="text-gray-700 hover:text-gray-600 dark:text-white transition ease-in-out duration-150"
                                    onClick={toggle}
                                >
                                    <MdClose className="text-[25px]" />
                                </button>
                            </div>
                            {/* Contenido */}
                            <div className="mt-3 px-2">
                                <div className="flex items-center border-b-[1px] justify-between py-4">
                                    <div className="flex items-start flex-col">
                                        <span className="dark:text-white">
                                            Modo Oscuro
                                        </span>
                                    </div>
                                    <>
                                        <Switch
                                            checked={enabled}
                                            onChange={toggleDarkMode}
                                            className={`${
                                                enabled
                                                    ? "bg-blue-600"
                                                    : "bg-gray-200"
                                            } relative inline-flex h-6 w-11 items-center rounded-full`}
                                        >
                                            <span
                                                className={`${
                                                    enabled
                                                        ? "translate-x-6"
                                                        : "translate-x-1"
                                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                            />
                                        </Switch>
                                    </>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </div>
        </Transition>
    );
}
