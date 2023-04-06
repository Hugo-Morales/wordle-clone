import React from "react";
import { MdClose } from "react-icons/md";
import { Transition } from "@headlessui/react";

export default function Stats({ isOpen, toggle }) {
    const stats = JSON.parse(localStorage.getItem("stats"));
    console.log(stats);
    const values =
        stats !== null ? Object.values(stats.Intentos) : [0, 0, 0, 0, 0]; // Convierto los valores del obj en un array
    let max = 0;

    for (let i = 0; i < values.length; i++) {
        let aux = 0;

        if (values[i] > aux) {
            aux = values[i];
            max = aux;
        }
        max;
    }

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
                                    Estadísticas
                                </h2>
                                <button
                                    className="text-gray-700 hover:text-gray-600 dark:text-white transition ease-in-out duration-150"
                                    onClick={toggle}
                                >
                                    <MdClose className="text-[25px]" />
                                </button>
                            </div>
                            {/* Contenido */}
                            <div className="mt-3 px-2 dark:text-white text-darkMode">
                                <div className="flex flex-col justify-start text-center border-b-[1px]">
                                    {/* Stats */}
                                    <div className="flex gap-1 justify-center">
                                        {/* Total */}
                                        <div className="flex flex-col ml-3 text-start">
                                            <span className="text-[34px] font-normal">
                                                {stats === null
                                                    ? 0
                                                    : stats.Total}
                                            </span>
                                            <span>Jugadas</span>
                                        </div>
                                        {/* Porcentaje */}
                                        <div className="flex flex-col ml-3 text-center">
                                            <span className="text-[34px] font-normal">
                                                {stats === null
                                                    ? 0
                                                    : stats.Total === 0
                                                    ? 0
                                                    : eval(
                                                          (stats.Ganados /
                                                              stats.Total) *
                                                              100
                                                      )}
                                            </span>
                                            <span>% Victorias</span>
                                        </div>
                                        {/* Racha */}
                                        <div className="flex flex-col ml-3 text-center">
                                            <span className="text-[34px] font-normal">
                                                {stats === null
                                                    ? 0
                                                    : stats.Racha}
                                            </span>
                                            <span>Racha</span>
                                        </div>
                                        {/* Max. Racha */}
                                        <div className="flex flex-col ml-3 text-center">
                                            <span className="text-[34px] font-normal">
                                                {stats === null
                                                    ? 0
                                                    : stats.MaxRacha}
                                            </span>
                                            <span>Máx. Racha</span>
                                        </div>
                                    </div>
                                    <div className="mt-2 mb-1 w-full p-2">
                                        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                                            Estadísticas de Intentos
                                        </h2>
                                        {values ? (
                                            values.map((v, index) => (
                                                <div
                                                    key={index}
                                                    className="flex pt-1.5"
                                                >
                                                    <span>{index + 1}</span>
                                                    <span
                                                        className={
                                                            "ml-2 " +
                                                            (v === 0
                                                                ? "px-2.5 "
                                                                : "text-right ") +
                                                            (max === v &&
                                                            max !== 0
                                                                ? "bg-correct"
                                                                : "bg-error")
                                                        }
                                                        style={
                                                            v !== 0
                                                                ? {
                                                                      width: `${Math.ceil(
                                                                          (v /
                                                                              max) *
                                                                              100
                                                                      )}%`,
                                                                      paddingRight:
                                                                          "10px",
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {v}
                                                    </span>
                                                </div>
                                            ))
                                        ) : (
                                            <>No Data</>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-1">
                                    Próxima palabra <span id="nextGame"></span>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </div>
        </Transition>
    );
}
