import React from "react";
import { useTranslation } from "react-i18next";

// data
import { animal } from "./CardPet/data";

// component
import CardPet from "./CardPet";

// styles
import { StyledContainer } from "./styles";

const ContainerPets = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <StyledContainer>
            <h1>{t("ContainerCard:title")}</h1>
            {animal.map(
                ({ id, genre, breed, age, type, name, imageUrl, distance, dateOfBirth }) => (
                    <CardPet
                        age={age}
                        breed={breed}
                        dateOfBirth={dateOfBirth}
                        distance={distance}
                        genre={genre}
                        imageUrl={imageUrl}
                        key={id}
                        name={name}
                        type={type}
                    />
                )
            )}
        </StyledContainer>
    );
};

export default ContainerPets;
