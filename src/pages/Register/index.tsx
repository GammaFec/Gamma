import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import Logo from "../../assets/img/Logo.svg";
import * as variantType from "../../common/constants";
import { StyledMainWrapper, StyledP, StyledForm, StyledImg } from "./styles";
import eye from "../../assets/img/eye.svg";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword } from "../../services/firebase/email-auth";

const RegisterPage: React.FC = () => {
    const { t } = useTranslation("Register");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const history = useHistory();

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value);
    };

    const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/movil-auth/123345");
            })
            .catch((error) => {
                if (error.code.includes("auth/weak-password")) {
                    setModalMessage("Por favor ingresa una contraseña más segura");
                } else if (error.code.includes("auth/email-already-in")) {
                    setModalMessage("El correo ingresado ya se encuentra en uso");
                } else {
                    setModalMessage("No se puede registrar. Por favor intente de nuevo más tarde");
                }
                setShowModal(true);
            });
    };

    return (
        <StyledMainWrapper>
            <>
                <StyledImg alt="logo" src={Logo}></StyledImg>
                <StyledP>{t("Title")}</StyledP>
            </>
            <StyledForm onSubmit={handleFormSubmit}>
                <Input
                    autocomplete="email"
                    id="email"
                    name="email"
                    onChange={handleEmailChange}
                    placeholder={t("Email")}
                    type="text"
                    value={email}
                />
                <Input
                    autocomplete="password"
                    icon={eye}
                    id="password"
                    name="password"
                    onChange={handlePasswordChange}
                    placeholder={t("Password")}
                    type="password"
                    value={password}
                />
                <Button
                    disabled={email === "" || password === "" ? true : false}
                    variant={variantType.PRIMARY}>
                    {t("Register")}
                </Button>
            </StyledForm>
            <Modal message={modalMessage} setShow={setShowModal} show={showModal}></Modal>
        </StyledMainWrapper>
    );
};

export default RegisterPage;
