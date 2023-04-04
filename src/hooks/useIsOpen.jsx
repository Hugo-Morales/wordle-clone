import { useState } from "react";

export default function useIsOpen() {
    const [modal, setModal] = useState(false);
    const [isOpen, setisOpen] = useState(false);

    const toggleOffcanvas = () => {
        setisOpen(!isOpen);
    };

    const toggleModal = () => {
        setModal(!modal);
    };

    return { isOpen, modal, toggleOffcanvas, toggleModal };
}
