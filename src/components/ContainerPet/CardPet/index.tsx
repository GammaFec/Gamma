import React from "react";
import moment from "moment";

// Styles
import { StyledCard, StyledImage, StyledPetInfo } from "./styles";

// Types
import { ICardPet } from "./types";

// Svg
import { ReactComponent as Location } from "../../../assets/img/fluent_location-28-filled.svg";
import { ReactComponent as Famale } from "../../../assets/img/bx_bx-female-sign.svg";
import { ReactComponent as Male } from "../../../assets/img/gg_gender-male.svg";

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
    const monthesOfLife = moment().diff(dateOfBirth, "months");
    let resultAnimalAge;
    if (monthesOfLife === 1) {
        resultAnimalAge = "1 mes";
    } else if (monthesOfLife >= 2 && monthesOfLife <= 11) {
        resultAnimalAge = `${moment().diff(dateOfBirth, "months")} meses`;
    } else if (monthesOfLife >= 12 && monthesOfLife <= 23) {
        resultAnimalAge = "1 año";
    } else {
        resultAnimalAge = `${moment().diff(dateOfBirth, "years")} años`;
    }

    return (
        <>
            <StyledCard>
                <StyledImage alt={alt} src={imageUrl} />
                <StyledPetInfo>
                    <h2>{name}</h2>
                    {genre === "male" ? <Male /> : <Famale />}
                    <figcaption>
                        <span>Raza: {breed}</span>
                        <span>
                            {resultAnimalAge}, {type}
                        </span>
                        <Location /> Distancia: {distance}
                    </figcaption>
                </StyledPetInfo>
            </StyledCard>
        </>
    );
};

export default CardPet;
