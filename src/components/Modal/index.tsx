import React from "react";
import Button from "../Button";
import { StyledModal } from "./styles";
import { IModal } from "./types";
import * as variantType from "../../common/styles/constants";
//Translate - i18next
import { useTranslation } from "react-i18next";

// Props: title, children, action
// Agregar X y Botón Close y Botón ok con acción
// Formato del modal
const Modal: React.FC<IModal> = ({ children, className }: IModal) => {
    const handleOkAction = (): void => {
        alert("click Ok");
    };
    const handleClose = (): void => {
        alert("click close");
    };
    const { t } = useTranslation();
    return (
        <StyledModal className={className}>
            {children}
            <div>
                <Button handleClick={handleClose} variant={variantType.SECONDARY}>
                    {t("Modal:Close")}
                </Button>
                <Button handleClick={handleOkAction} variant={variantType.PRIMARY}>
                    {t("Modal:Ok")}
                </Button>
            </div>
        </StyledModal>
    );
};

export default Modal;
