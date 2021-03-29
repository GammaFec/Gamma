import i18next from "i18next";
import { LanguageList } from "../../../i18next/config";

i18next.addResources(LanguageList.SPANISH, "CardPet", {
    breed: "Raza",
    distance: "Distancia",
    year: "año",
    month: "mes"
});

i18next.addResources(LanguageList.ENGLISH, "CardPet", {
    breed: "Breed",
    distance: "Distance",
    year: "year",
    month: "month"
});
