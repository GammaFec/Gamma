import React from "react";

// Styles
import { StyledCard, StyledImage, StyledPetInfo } from "./styles";

// Types
import { ICardPet } from "./types";

// Svg
import { ReactComponent as Location } from "../../../assets/img/fluent_location-28-filled.svg";
import { ReactComponent as Female } from "../../../assets/img/bx_bx-female-sign.svg";
import { ReactComponent as Male } from "../../../assets/img/gg_gender-male.svg";
import { useTranslation } from "react-i18next";
import { ageCalculate } from "../../../utils/ageCalculate";

const CardPet: React.FC<ICardPet> = ({
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
    return (
        <>
            <StyledCard>
                <StyledImage alt={alt} src={imageUrl} />
                <StyledPetInfo>
                    <h2>{name}</h2>
                    {genre === "male" ? <Male /> : <Female />}
                    <figcaption>
                        <span>
                            {t("CardPet:breed")}: {breed}
                        </span>
                        <span>
                            {resultAnimalAge}, {type}
                        </span>
                        <Location /> {t("CardPet:distance")}: {distance}
                    </figcaption>
                </StyledPetInfo>
            </StyledCard>
        </>
    );
};

export default CardPet;
