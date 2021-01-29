import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";

// Components
import Button from "../Button";

// Others
import { PRIMARY, SECONDARY } from "../../common/constants";

const ContainerLoginSignUp = (): ReactElement => {
    const history = useHistory();

    const handleGoToMovilAuth = () => {
        history.push("/movil-auth/useId");
    };

    const handleGoToRegister = () => {
        history.push("/Register");
    };

    return (
        <div>
            <Button variant={PRIMARY} onClick={handleGoToMovilAuth}>
                Login
            </Button>
            <Button variant={SECONDARY} onClick={handleGoToRegister}>
                Sign up
            </Button>
        </div>
    );
};

export default ContainerLoginSignUp;
