import React from "react";
import { useTranslation } from "react-i18next";

// component
import CardPet from "./CardPet";

// styles
import { StyledContainer } from "./styles";
import { ICardPet, ICardPetData } from "./CardPet/types";

const ContainerPets = ({ animals }: ICardPetData): JSX.Element => {
    const { t } = useTranslation();
    return (
        <StyledContainer>
            <h1>{t("ContainerPets:title")}</h1>
            {animals.map(
                ({
                    id,
                    genre,
                    breed,
                    age,
                    type,
                    name,
                    imageUrl,
                    distance,
                    dateOfBirth
                }: ICardPet) => (
                    <CardPet
                        age={age}
                        breed={breed}
                        dateOfBirth={dateOfBirth}
                        distance={distance}
                        genre={genre}
                        id={id}
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
