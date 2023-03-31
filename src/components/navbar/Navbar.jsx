import { useState } from "react";
import { FaBars, FaQuestionCircle } from "react-icons/fa";
import { AiFillSignal } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import Modal from "../modal/Modal";

export default function Navbar() {
    const [isOpen, setisOpen] = useState(false);

    const toggleOffcanvas = () => {
        setisOpen(!isOpen);
    };

    // console.log(isOpen);

    return (
        <nav className="h-16 border-b-[1px] text-center">
            <div className="h-full flex justify-between items-center p-0 mx-4 text-3xl">
                <button
                    className="border-[1px] rounded-md"
                    onClick={toggleOffcanvas}
                >
                    <FaBars className="p-1" />
                </button>
                <h1 className="font-bold pl-24">Wordle</h1>
                <div className="flex justify-between items-center gap-4 text-[30px]">
                    <FaQuestionCircle />
                    <AiFillSignal />
                    <IoSettings />
                </div>
            </div>
            <Modal isOpen={isOpen} toggle={toggleOffcanvas} />
        </nav>
    );
}
