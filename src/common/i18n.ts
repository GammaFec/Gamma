import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
    fallbackLng: "en",
    initImmediate: false
});

export default i18next;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function requireAll(requireContext: __WebpackModuleApi.RequireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(require.context("..", true, /i18n\.(js|ts)$/));
