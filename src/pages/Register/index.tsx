import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Logo from "../../assets/img/Logo.svg";
import * as variantType from "../../common/styles/constants";
import { StyledMainWrapper, StyledP, StyledForm } from "./styles";
import eye from "../../assets/img/eye.svg";
import { useTranslation } from "react-i18next";

const RegisterPage: React.FC = () => {
    const { t } = useTranslation("Register");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setPassword(event.target.value);
    }

    function handleFormSubmit(event: React.ChangeEvent<HTMLFormElement>): void {
        event.preventDefault();
    }

    return (
        <StyledMainWrapper>
            <div>
                <img alt="logo" src={Logo}></img>
                <StyledP>{t("Title")}</StyledP>
            </div>
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
                <Button variant={variantType.PRIMARY}>{t("Register")}</Button>
            </StyledForm>
        </StyledMainWrapper>
    );
};

export default RegisterPage;
