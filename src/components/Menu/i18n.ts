import { LanguageList } from "./../../i18next/config";
import i18next from "i18next";

i18next.addResources(LanguageList.SPANISH, "Menu", {
    UserType: "Adoptante",
    CloseAlt: "Cerrar menú",
    Match: "Match",
    GiveUp: "Dar en adopción",
    Msgs: "Mensajes",
    Fav: "Favoritos",
    Config: "Configuración",
    LogOut: "Salir"
});

i18next.addResources(LanguageList.ENGLISH, "Menu", {
    UserType: "Adopter",
    CloseAlt: "Close menu",
    Match: "Match",
    GiveUp: "Give up for adoption",
    Msgs: "Messages",
    Fav: "Favorites",
    Config: "Configuration",
    LogOut: "Log Out"
});
