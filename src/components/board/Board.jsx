import React from "react";

export default function Board() {
    const row = ["", "", "", "", ""];

    return (
        <div className="grid gap-[5px] box-border h-[420px] p-[10px] w-[350px] grid-rows-cube">
            {/* Línea 1 */}
            <div className="grid gap-[5px] grid-cols-5xl">
                {row.map((c, index) => (
                    <div
                        key={index}
                        className="inline-flex justify-center items-center border-2 dark:border-[#3a3a3e] border-[#d3d6da] box-border dark:text-white text-darkMode text-[2rem] font-bold uppercase select-none align-middle w-full line1"
                    >
                        {c}
                    </div>
                ))}
            </div>
            {/* Línea 2 */}
            <div className="grid gap-[5px] grid-cols-5xl">
                {row.map((c, index) => (
                    <div
                        key={index}
                        className="inline-flex justify-center items-center border-2 dark:border-[#3a3a3e] border-[#d3d6da] box-border dark:text-white text-darkMode text-[2rem] font-bold uppercase select-none align-middle w-full line2"
                    >
                        {c}
                    </div>
                ))}
            </div>
            {/* Línea 3 */}
            <div className="grid gap-[5px] grid-cols-5xl">
                {row.map((c, index) => (
                    <div
                        key={index}
                        className="inline-flex justify-center items-center border-2 dark:border-[#3a3a3e] border-[#d3d6da] box-border dark:text-white text-darkMode text-[2rem] font-bold uppercase select-none align-middle w-full line3"
                    >
                        {c}
                    </div>
                ))}
            </div>
            {/* Línea 4 */}
            <div className="grid gap-[5px] grid-cols-5xl">
                {row.map((c, index) => (
                    <div
                        key={index}
                        className="inline-flex justify-center items-center border-2 dark:border-[#3a3a3e] border-[#d3d6da] box-border dark:text-white text-darkMode text-[2rem] font-bold uppercase select-none align-middle w-full line4"
                    >
                        {c}
                    </div>
                ))}
            </div>
            {/* Línea 5 */}
            <div className="grid gap-[5px] grid-cols-5xl">
                {row.map((c, index) => (
                    <div
                        key={index}
                        className="inline-flex justify-center items-center border-2 dark:border-[#3a3a3e] border-[#d3d6da] box-border dark:text-white text-darkMode text-[2rem] font-bold uppercase select-none align-middle w-full line5"
                    >
                        {c}
                    </div>
                ))}
            </div>
            {/* Línea 6 */}
            <div className="grid gap-[5px] grid-cols-5xl">
                {row.map((c, index) => (
                    <div
                        key={index}
                        className="inline-flex justify-center items-center border-2 dark:border-[#3a3a3e] border-[#d3d6da] box-border dark:text-white text-darkMode text-[2rem] font-bold uppercase select-none align-middle w-full line6"
                    >
                        {c}
                    </div>
                ))}
            </div>
        </div>
    );
}
