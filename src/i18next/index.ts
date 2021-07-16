import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { DefaultLanguage } from "./config";

export const detection = {
    // order and from where user language should be detected
    order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain"
    ],

    // keys or params to lookup language from
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    // cache user language on
    caches: ["localStorage", "cookie"],
    excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement,

    // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
    cookieOptions: { path: "/", sameSite: "strict" }
};

i18n.use(initReactI18next).use(LanguageDetector).init({
    detection,
    fallbackLng: DefaultLanguage
});

function requireAll(requireContext: __WebpackModuleApi.RequireContext): void {
    requireContext.keys().map(requireContext);
}

requireAll(require.context("..", true, /i18n.(js|ts)$/));
