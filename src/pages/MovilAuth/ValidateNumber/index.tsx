/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { PRIMARY } from "../../../common/constants";
import CodeVerification from "../CodeVerification";
import { ReactComponent as Pen } from "../../../assets/pen.svg";
import {
    StyledA,
    StyledButtonContinue,
    StyledFoot,
    StyledForm,
    StyledSpan,
    StyledSub
} from "./styles";
import iValidateNumber from "./types";

const ValidateNumber: React.FC<iValidateNumber> = ({
    phoneNumber,
    goBack,
    buttonId
}: // handleSubmit
iValidateNumber): JSX.Element => {
    const [code, setCode] = useState<string>("");

    // const submit = () => handleSubmit(code);

    return (
        <StyledForm>
            <div>
                <h3>
                    Ingresa el
                    <br /> código que recibiste
                </h3>
                <StyledSub>
                    Fue enviado al número <StyledSpan>+57968069617</StyledSpan>
                    <Pen />
                </StyledSub>
            </div>
            <div>
                <button onClick={goBack} type="button">
                    {phoneNumber}
                </button>
                <CodeVerification handleChange={setCode} />
                <StyledButtonContinue id={buttonId} type="submit" variant={PRIMARY}>
                    Verificar y proceder
                </StyledButtonContinue>
                <StyledFoot>
                    ¿Aún no te llegó? <StyledA href="http">Reenvíar Código</StyledA>
                </StyledFoot>
            </div>
        </StyledForm>
    );
};

export default ValidateNumber;
