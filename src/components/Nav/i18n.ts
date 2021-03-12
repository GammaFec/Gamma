import { LanguageList } from "./../../i18next/config";
import i18next from "i18next";

i18next.addResources(LanguageList.SPANISH, "Nav", {
    LogoAlt: "Logo",
    MenuAlt: "Menú",
    MessagesAlt: "Mensajes"
});

i18next.addResources(LanguageList.ENGLISH, "Nav", {
    LogoAlt: "Logo",
    MenuAlt: "Menu",
    MessagesAlt: "Messages"
});
