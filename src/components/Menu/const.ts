import { PATHS } from "../../routes/paths";
//Translate - i18next
import i18n from "i18next";
//Images
import Heart from "../../assets/img/heart-filled.svg";
import House from "../../assets/img/home-heart.svg";
import Msg from "../../assets/img/bxs-message.svg";
import Fav from "../../assets/img/star.svg";
import Config from "../../assets/img/config.svg";
import LogOut from "../../assets/img/close.svg";

const menuOptions = [
    {
        id: "match",
        route: PATHS.Match,
        image: Heart,
        text: i18n.t("Menu:Match")
    },
    {
        id: "giveUp",
        route: PATHS.GiveUp,
        image: House,
        text: i18n.t("Menu:GiveUp")
    },
    {
        id: "messages",
        route: PATHS.Messages,
        image: Msg,
        text: i18n.t("Menu:Msgs")
    },
    {
        id: "favorites",
        route: PATHS.Favorites,
        image: Fav,
        text: i18n.t("Menu:Fav")
    },
    {
        id: "config",
        route: PATHS.Config,
        image: Config,
        text: i18n.t("Menu:Config")
    },
    {
        id: "logOut",
        route: PATHS.Login,
        image: LogOut,
        text: i18n.t("Menu:LogOut")
    }
];

export default menuOptions;
