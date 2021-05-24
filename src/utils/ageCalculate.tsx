import moment from "moment";
import { useTranslation } from "react-i18next";

export const ageCalculate = (dateOfBirth: string): string => {
    const { t } = useTranslation();
    const monthsOfLife = moment().diff(dateOfBirth, "months");
    let resultAnimalAge;

    if (monthsOfLife === 1) {
        resultAnimalAge = `1 ${t("CardPet:month")}`;
    } else if (monthsOfLife >= 2 && monthsOfLife <= 11) {
        resultAnimalAge = `${moment().diff(dateOfBirth, "months")}  ${t("CardPet:pluralMonth")}`;
    } else if (monthsOfLife >= 12 && monthsOfLife <= 23) {
        resultAnimalAge = `1 ${t("CardPet:year")}`;
    } else {
        resultAnimalAge = `${moment().diff(dateOfBirth, "years")} ${t("CardPet:pluralYear")}`;
    }

    return resultAnimalAge;
};
