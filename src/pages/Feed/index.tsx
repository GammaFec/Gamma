import React from "react";
import { StyledMainWrapper, StyledHeader } from "./styles";
// import { useTranslation } from "react-i18next";
// import { useHistory } from "react-router-dom";
import Nav from "../../components/Nav";
import ContainerPets from "../../components/ContainerPets";
import { animals } from "../../components/ContainerPets/CardPet/data";
const LoginPage: React.FC = (): JSX.Element => {
    // const { t } = useTranslation("Feed");
    // const { push } = useHistory();

    // const animals = {
    //     id: 1,
    //     genre: "female",
    //     breed: "Dalmata",
    //     age: 4,
    //     type: "dog",
    //     name: "Rocky",
    //     imageUrl: "notimage",
    //     distance: "2km",
    //     dateOfBirth: "01/01/2018"
    // };

    return (
        <StyledMainWrapper>
            <StyledHeader>
                <Nav />
            </StyledHeader>
            <ContainerPets animals={animals} />
        </StyledMainWrapper>
    );
};

export default LoginPage;
