import React, { ReactElement } from "react";

// Components
import Paragraph from "./paragraph";
import Title from "./title";

const Mess = (): ReactElement => {
    return (
        <>
            <Title title="hola" />
            <Paragraph text="parrafo" />
        </>
    );
};

export default Mess;
