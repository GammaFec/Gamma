import moment from "moment";
import { useTranslation } from "react-i18next";

export const ageCalculate = (dateOfBirth: string): string => {
    const { t } = useTranslation();
    const monthsOfLife = moment().diff(dateOfBirth, "months");
    let resultAnimalAge;

    switch (monthsOfLife) {
        case 1:
            resultAnimalAge = `1 ${t("CardPet:month")}`;
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            resultAnimalAge = `${moment().diff(dateOfBirth, "months")}  ${t("CardPet:month")}s`;
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            resultAnimalAge = `1 ${t("CardPet:year")}`;
            break;
        default:
            resultAnimalAge = `${moment().diff(dateOfBirth, "years")} ${t("CardPet:year")}s`;
            break;
    }
    return resultAnimalAge;
};
