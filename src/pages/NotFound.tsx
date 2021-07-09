import React, { useState } from "react";
import Modal from "../components/Modal";

const NotFound: React.FC = () => {
    const [show, setShow] = useState(false);
    const handleClick = (): void => {
        alert("holis");
    };
    const handleShow = (): void => {
        setShow(true);
        alert("modal");
    };

    return (
        <div>
            <div>Not Found</div>
            <button onClick={handleShow} onKeyDown={handleShow}>
                Show Modal
            </button>
            <Modal
                handleAccept={handleClick}
                setShow={setShow}
                show={show}
                title="Título del modal">
                Contenido del modal
            </Modal>
        </div>
    );
};

export default NotFound;
