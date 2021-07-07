import React from "react";
import Button from "../Button";
import { StyledModal, StyledButtonsWrapper, StyledModalHeader, StyledModalMain } from "./styles";
import { IModal } from "./types";
import * as variantType from "../../common/styles/constants";
//Translate - i18next
import { useTranslation } from "react-i18next";

// Props: title, children, action
// Agregar X y Botón Close y Botón ok con acción
// Formato del modal
const Modal: React.FC<IModal> = ({ title, children }: IModal) => {
    // const Modal: React.FC<IModal> = ({ title, children, isShown }: IModal) => {
    const handleOkAction = (): void => {
        alert("click Ok");
    };
    const handleClose = (): void => {
        alert("click close");
    };
    const { t } = useTranslation();

    return (
        // <StyledModal className={`${isShown && "isShown"}`}>
        // <StyledModal isShown={isShown}>
        <StyledModal>
            <StyledModalHeader>
                {title}
                <button onClick={handleClose}>X</button>
            </StyledModalHeader>
            <StyledModalMain>{children}</StyledModalMain>
            <StyledButtonsWrapper>
                <Button handleClick={handleClose} variant={variantType.SECONDARY}>
                    {t("Modal:Close")}
                </Button>
                <Button handleClick={handleOkAction} variant={variantType.PRIMARY}>
                    {t("Modal:Ok")}
                </Button>
            </StyledButtonsWrapper>
        </StyledModal>
    );
};

export default Modal;
