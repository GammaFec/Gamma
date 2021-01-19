import React, { ReactElement } from "react";

// Components
import Paragraph from "./Paragraph";
import Title from "./Title";

const Mess = (): ReactElement => {
    return (
        <>
            <Title title={"hola"} />
            <Paragraph text={"parrafo"} />
        </>
    );
};

export default Mess;
