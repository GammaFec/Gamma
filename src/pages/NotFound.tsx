import React from "react";
import Modal from "../components/Modal";

const NotFound: React.FC = () => {
    // return <div>Not Found</div>;
    return (
        <div>
            {/* <Modal isShown={true} title="Título del modal"> */}
            <Modal title="Título del modal">Contenido del modal</Modal>
        </div>
    );
};

export default NotFound;
