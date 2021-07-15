import React, { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import { InputIsValid } from "../../utils/InputValidation";
import Logo from "../../assets/img/Logo.svg";
import * as variantType from "../../common/styles/constants";
import { StyledMainWrapper, StyledP, StyledForm } from "./styles";
import eye from "../../assets/img/eye.png";
import { useTranslation } from "react-i18next";

const LoginPage: React.FC = () => {
    const { t } = useTranslation("Login");

    const [show, setShow] = useState(false);
    // const handleClick = (): void => {
    //     alert("holis");
    // };
    const handleShow = (): void => {
        setShow(true);
    };

    const [usernameObj, setUsernameObj] = useState({
        value: "",
        valid: false
    });

    const [passwordObj, setPasswordObj] = useState({
        value: "",
        valid: false
    });

    const AccountInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue = event.target.value.trim();
        const vadidInput = InputIsValid(newValue, true);
        const newState = {
            ...usernameObj,
            value: newValue,
            valid: vadidInput
        };

        return setUsernameObj(newState);
    };

    const PasswordInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue = event.target.value.trim();
        const vadidInput = InputIsValid(newValue);
        const newState = {
            ...passwordObj,
            value: newValue,
            valid: vadidInput
        };

        return setPasswordObj(newState);
    };

    const submitHandler = (event: React.ChangeEvent<HTMLFormElement>): void =>
        event.preventDefault();

    const loginButtonClicked = (): void => {
        if (usernameObj.valid && passwordObj.valid) {
            //do something with the form Data
            alert("clicked!!! The user and the password ARE valid");
        } else {
            return alert("clicked!! The user OR the password IS NOT valid");
        }
    };

    return (
        <StyledMainWrapper>
            <div>
                <img alt="logo" src={Logo}></img>
                <StyledP>{t("Title")}</StyledP>
            </div>
            <StyledForm onSubmit={submitHandler}>
                <button onClick={handleShow} onKeyDown={handleShow}>
                    Show Modal
                </button>
                <Input
                    autocomplete="user-name"
                    doFocus
                    id="user-name"
                    name="user-name"
                    onChange={AccountInputHandler}
                    placeholder={t("AccountInputPlaceholder")}
                    type="text"
                    value={usernameObj.value}
                />
                <Input
                    autocomplete="current-password"
                    icon={eye}
                    id="current-password"
                    name="current-password"
                    onChange={PasswordInputHandler}
                    placeholder={t("PasswordInputPlaceholder")}
                    type="password"
                    value={passwordObj.value}
                />
                <Button
                    handleClick={(): void => loginButtonClicked()}
                    variant={variantType.PRIMARY}>
                    {t("Login")}
                </Button>
            </StyledForm>
            <Modal
                // handleAccept={handleClick}
                setShow={setShow}
                show={show}
                title="Título del modal">
                Contenido del modal
            </Modal>
        </StyledMainWrapper>
    );
};

export default LoginPage;
