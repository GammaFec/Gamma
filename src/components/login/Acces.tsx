import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";

// Components
import Button from "../Button";

// Others
import { PRIMARY, SECONDARY } from "../../common/constants";

const Acces = (): ReactElement => {
    const history = useHistory();

    /** @function this function go to /movil-auth/useId and here the users can loggin with its account*/
    const handleGoToMovilAuth = () => {
        history.push("/movil-auth/useId");
    };

    /** @function E this function go to /Register and here the users can to register*/
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
