import React, { useState } from "react";
import { PRIMARY } from "../../../common/styles/constants";
import CodeVerification from "../CodeVerification";
import {
    StyledA,
    StyledButtonContinue,
    StyledFoot,
    StyledForm,
    StyledGoBack,
    StyledSpan,
    StyledSub
} from "./styles";
import iValidateNumber from "./types";
import { HANDSOK_SVG, PEN_SVG } from "../../../common/styles/svgs";

const ValidateNumber: React.FC<iValidateNumber> = ({
    phoneNumber,
    goBack,
    buttonId,
    handleSubmit
}: iValidateNumber): JSX.Element => {
    const [code, setCode] = useState<string>("");
    const submit = (): void => handleSubmit(code);

    return (
        <StyledForm handleSubmit={submit}>
            <button onClick={goBack} type="button">
                {phoneNumber}
            </button>
            <div>
                <h3>
                    <span>Ingresa el</span> <span>código que recibiste</span>
                </h3>
                <StyledSub>
                    Fue enviado al número <StyledSpan>+57968069617</StyledSpan>
                    <PEN_SVG />
                </StyledSub>
            </div>
            <div>
                <StyledGoBack onClick={goBack} type="button">
                    {phoneNumber}
                </StyledGoBack>
                <CodeVerification handleChange={setCode} />
                <StyledButtonContinue id={buttonId} type="submit" variant={PRIMARY}>
                    Verificar y proceder
                </StyledButtonContinue>
                <StyledFoot>
                    ¿Aún no te llegó? <StyledA href="http">Reenvíar Código</StyledA>
                </StyledFoot>
            </div>
            <HANDSOK_SVG />
        </StyledForm>
    );
};

export default ValidateNumber;
