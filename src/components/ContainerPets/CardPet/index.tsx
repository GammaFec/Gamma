import React from "react";

import { useTranslation } from "react-i18next";

import { MALE } from "../../../common/styles/constants";
import { FEMALE_SVG, LOCATION, MALE_SVG } from "../../../common/styles/svgs";
import { ageCalculate } from "../../../utils/ageCalculate";
import { StyledCard, StyledImage, StyledPetInfo } from "./styles";
import { ICardPet } from "./types";

const CardPet: React.FC<ICardPet> = ({
    id,
    name,
    imageUrl,
    alt,
    breed,
    type,
    genre,
    distance,
    dateOfBirth
}: ICardPet) => {
    const { t } = useTranslation();
    const resultAnimalAge = ageCalculate(dateOfBirth);

    const handleClick = (): void => {
        alert(id);
    };

    return (
        <StyledCard onClick={handleClick}>
            <StyledImage alt={alt} src={imageUrl} />
            <StyledPetInfo>
                <h2>{name}</h2>
                {genre === MALE ? <MALE_SVG /> : <FEMALE_SVG />}
                <figcaption>
                    <span>
                        {t("CardPet:breed")}: {breed}
                    </span>
                    <span>
                        {resultAnimalAge}, {type}
                    </span>
                    <LOCATION /> {t("CardPet:distance")}: {distance}
                </figcaption>
            </StyledPetInfo>
        </StyledCard>
    );
};

export default CardPet;
