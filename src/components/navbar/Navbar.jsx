import { FaBars, FaQuestionCircle } from "react-icons/fa";
import { AiFillSignal } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import OffCanvas from "../offcanvas/OffCanvas";
import useIsOpen from "../../hooks/useIsOpen";
import Modal from "../modal/Modal";
import Stats from "../stats/Stats";
import Config from "../config/Config";

export default function Navbar() {
    const {
        isOpen,
        modal,
        estadistica,
        config,
        toggleOffcanvas,
        toggleModal,
        toggleEstas,
        toggleConfig,
    } = useIsOpen();

    return (
        <nav className="h-16 border-b-[1px] dark:border-[#3a3a3c] text-center dark:bg-darkMode">
            <div className="h-[4rem] flex justify-between items-center p-0 mx-4 text-3xl">
                <button
                    className="border-[1px] rounded-md"
                    onClick={toggleOffcanvas}
                >
                    <FaBars className="p-1" />
                </button>
                <h1 className="font-bold pl-24">Wordle</h1>
                <div className="flex justify-between items-center gap-4 text-[30px]">
                    <button onClick={toggleModal}>
                        <FaQuestionCircle />
                    </button>
                    <button onClick={toggleEstas}>
                        <AiFillSignal />
                    </button>
                    <button onClick={toggleConfig}>
                        <IoSettings />
                    </button>
                </div>
            </div>
            <OffCanvas isOpen={isOpen} toggle={toggleOffcanvas} />
            <Modal isOpen={modal} toggle={toggleModal} />
            <Stats isOpen={estadistica} toggle={toggleEstas} />
            <Config isOpen={config} toggle={toggleConfig} />
        </nav>
    );
}
