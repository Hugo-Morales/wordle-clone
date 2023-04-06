import { useEffect, useRef } from "react";
import Board from "./components/board/Board";
import Functions from "./components/keyboards/Functions";
import Keyboards from "./components/keyboards/Keyboards";
import Navbar from "./components/navbar/Navbar";
import { Toaster } from "react-hot-toast";

export default function App() {
    const dataFetchedRef = useRef(false);
    const { handleKeyDown, newGame } = Functions();

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        newGame();
    }, []);

    return (
        <div
            className="absolute left-0 top-0 dark:bg-darkMode bg-white flex flex-col h-full w-full text-center max-h-fill"
            tabIndex="0"
            onKeyDown={(e) => handleKeyDown(e.key)}
        >
            <Navbar />
            <div className="flex flex-col max-w-[500px] align-middle w-full  mx-[auto] mb-0">
                <div className="flex grow overflow-hidden justify-center items-center">
                    <Board />
                </div>
                <Keyboards />
            </div>
            <Toaster />
        </div>
    );
}
