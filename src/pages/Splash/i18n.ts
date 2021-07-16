import i18next from "i18next";

import { LanguageList } from "./../../i18next/config";

i18next.addResources(LanguageList.SPANISH, "Splash", {
    ImageAlt: "Logo de Adogtemos"
});

i18next.addResources(LanguageList.ENGLISH, "Splash", {
    ImageAlt: "Adogtemos Logo"
});
