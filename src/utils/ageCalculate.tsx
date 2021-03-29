import moment from "moment";
import { useTranslation } from "react-i18next";

export const ageCalculate = (dateOfBirth: string): string => {
    const { t } = useTranslation();
    const monthsOfLife = moment().diff(dateOfBirth, "months");
    let resultAnimalAge;

    switch (true) {
        case monthsOfLife === 1:
            resultAnimalAge = `1 ${t("CardPet:month")}`;
            break;
        case monthsOfLife >= 2 && monthsOfLife <= 11:
            resultAnimalAge = `${moment().diff(dateOfBirth, "months")}  ${t("CardPet:month")}s`;
            break;
        case monthsOfLife >= 12 && monthsOfLife <= 23:
            resultAnimalAge = `1 ${t("CardPet:year")}`;
            break;
        default:
            resultAnimalAge = `${moment().diff(dateOfBirth, "years")} ${t("CardPet:year")}s`;
            break;
    }
    return resultAnimalAge;
};
