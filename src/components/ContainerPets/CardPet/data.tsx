import Rocky from "../../../assets/img/Rocky.svg";
import Chikorita from "../../../assets/img/Chikorita.svg";
import Sasha from "../../../assets/img/Sasha.svg";
import { ICardPet } from "./types";

export const animals: ICardPet[] = [
    {
        id: 123,
        name: "Roky",
        imageUrl: Rocky,
        alt: "",
        breed: "Dalmata",
        age: "3",
        type: "dog",
        genre: "male",
        distance: "3,4 km",
        dateOfBirth: "20180326"
    },

    {
        id: 234,
        name: "Sasha",
        imageUrl: Sasha,
        alt: "",
        breed: "Criollo",
        age: "1",
        type: "dog",
        genre: "female",
        distance: "1,2 km",
        dateOfBirth: "20200105"
    },
    {
        id: 1254,
        name: "Chikorita",
        imageUrl: Chikorita,
        alt: "",
        breed: "Schnauzer",
        age: "1",
        type: "dog",
        genre: "female",
        distance: "2,2 km",
        dateOfBirth: "20210210"
    }
];
