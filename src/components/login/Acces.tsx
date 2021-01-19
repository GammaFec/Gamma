import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";

// Components
import Button from "../Button";

// Others
import { PRIMARY, SECONDARY } from "../../common/constants";

const Acces = (): ReactElement => {
    const history = useHistory();

    /** @function Esta funcion lleva al usuario a esta ruta /movil-auth/useId para que se autentique y pueda ingresar a su cuenta*/
    const handleGoToMovilAuth = () => {
        history.push("/movil-auth/useId");
    };

    /** @function Esta funcion lleva al usuario a esta ruta /Register para que luego se registre*/
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

export default Acces;
