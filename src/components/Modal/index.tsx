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
import { useTranslation } from "react-i18next";

const Modal: React.FC<IModal> = ({
    show = false,
    setShow,
    title,
    children
}: // handleAccept
IModal) => {
    const handleAcceptAction = (): void => {
        setShow && setShow(false);
    };
    const handleClose = (): void => {
        setShow && setShow(false);
    };
    const { t } = useTranslation();

    return (
        <>
            {show && (
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
                                handleClick={handleAcceptAction}
                                isSmall={true}
                                variant={variantType.PRIMARY}>
                                {t("Modal:Ok")}
                            </Button>
                        </StyledButtonsWrapper>
                    </StyledModalContent>
                </StyledModal>
            )}
        </>
    );
};

export default Modal;
