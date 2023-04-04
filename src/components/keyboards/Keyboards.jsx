import { AiOutlineEnter } from "react-icons/ai";
import { FiDelete } from "react-icons/fi";
import Functions from "./Functions";

export default function Keyboards() {
    const first_row = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const second_row = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const third_row = ["Z", "X", "C", "V", "B", "N", "M"];

    const { buttonclicked, delclicked } = Functions();

    return (
        <div className="h-[200px]">
            {/* First Row */}
            <div className="flex mt-0 mx-auto mb-2 touch-manipulation w-full">
                {first_row.map((b, index) => (
                    <button
                        key={index}
                        value={b}
                        id={b}
                        onClick={buttonclicked}
                        className="dark:text-white text-darkMode outline-none font-bold p-0 border-0 h-[58px] rounded-[4px] cursor-pointer my-0 mx-[3px] select-none bg-[#d3d6da] dark:bg-[#818384] flex flex-[1] justify-center items-center uppercase"
                    >
                        {b}
                    </button>
                ))}
            </div>
            {/* Second Row */}
            <div className="flex mt-0 mx-auto mb-2 touch-manipulation w-full">
                <div className="flex-[0.5_1]"></div>
                {second_row.map((b, index) => (
                    <button
                        key={index}
                        value={b}
                        id={b}
                        onClick={buttonclicked}
                        className="dark:text-white text-darkMode outline-none font-bold p-0 border-0 h-[58px] rounded-[4px] cursor-pointer my-0 mx-[3px] select-none bg-[#d3d6da] dark:bg-[#818384] flex flex-[1] justify-center items-center uppercase"
                    >
                        {b}
                    </button>
                ))}
                <div className="flex-[0.5_1]"></div>
            </div>
            {/* Thrid Row */}
            <div className="flex mt-0 mx-auto mb-2 touch-manipulation w-full">
                <div className="flex-[1_1]">
                    <button
                        className="dark:text-white text-darkMode outline-none font-bold p-0 border-0 h-[58px] rounded-[4px] cursor-pointer my-0 mx-[3px] select-none bg-[#d3d6da] dark:bg-[#818384] flex flex-[1] justify-center items-center uppercase w-[50px]"
                        value="Enter"
                        id="Enter"
                    >
                        <AiOutlineEnter />
                    </button>
                </div>
                {third_row.map((b, index) => (
                    <button
                        key={index}
                        value={b}
                        id={b}
                        onClick={buttonclicked}
                        className="dark:text-white text-darkMode outline-none font-bold p-0 border-0 h-[58px] rounded-[4px] cursor-pointer my-0 mx-[3px] select-none bg-[#d3d6da] dark:bg-[#818384] flex flex-[1] justify-center items-center uppercase"
                    >
                        {b}
                    </button>
                ))}
                <div className="flex-[1_1]">
                    <button
                        className="dark:text-white text-darkMode outline-none font-bold p-0 border-0 h-[58px] rounded-[4px] cursor-pointer my-0 mx-[3px] select-none bg-[#d3d6da] dark:bg-[#818384] flex flex-[1] justify-center items-center uppercase w-[50px]"
                        value="Del"
                        onClick={delclicked}
                    >
                        <FiDelete />
                    </button>
                </div>
            </div>
        </div>
    );
}
