import { useState } from "react";

export default function useIsOpen() {
    const [modal, setModal] = useState(false);
    const [isOpen, setisOpen] = useState(false);
    const [estadistica, setEstadistica] = useState(false);
    const [config, setConfig] = useState(false);

    const toggleOffcanvas = () => {
        setisOpen(!isOpen);
    };

    const toggleModal = () => {
        setModal(!modal);
    };

    const toggleEstas = () => {
        setEstadistica(!estadistica);
    };

    const toggleConfig = () => {
        setConfig(!config);
    };

    return {
        isOpen,
        modal,
        estadistica,
        config,
        toggleOffcanvas,
        toggleModal,
        toggleEstas,
        toggleConfig,
    };
}
