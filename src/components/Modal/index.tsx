import React from "react";
import Button from "../Button";
import {
    StyledModal,
    StyledModalContent,
    StyledButtonsWrapper,
    StyledModalHeader,
    StyledCloseButton,
    StyledModalMain
} from "./styles";
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
        // <StyledModal  isShown={isShown}>
        <StyledModal>
            <StyledModalContent>
                <StyledModalHeader>
                    {title}
                    <StyledCloseButton onClick={handleClose}>X</StyledCloseButton>
                </StyledModalHeader>
                <StyledModalMain>{children}</StyledModalMain>
                <StyledButtonsWrapper>
                    <Button
                        handleClick={handleClose}
                        isSmall={true}
                        variant={variantType.SECONDARY}>
                        {t("Modal:Close")}
                    </Button>
                    <Button
                        handleClick={handleOkAction}
                        isSmall={true}
                        variant={variantType.PRIMARY}>
                        {t("Modal:Ok")}
                    </Button>
                </StyledButtonsWrapper>
            </StyledModalContent>
        </StyledModal>
    );
};

export default Modal;
