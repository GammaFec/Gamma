import { LanguageList } from "./../../i18next/config";
import i18next from "i18next";

i18next.addResources(LanguageList.SPANISH, "Home", {
    Title: "Titulo",
    Paragraph:
        "Español Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus dictum est, vel tincidunt enim iaculis nec. Cras vitae placerat nunc. Maecenas eu neque ac enim ullamcorper condimentum ut id ex. Donec porta vel justo at interdum. Curabitur vitae diam leo. Pellentesque a efficitur nulla. Suspendisse facilisis eu enim eu tempor. Fusce erat metus, tempor quis lacus nec, accumsan ornare erat. Sed viverra et tellus at mattis.",
    SignUp: "Registarse",
    LogIn: "Iniciar sesión",
    ImageAlt: "Imagen de un perrx o gatx"
});

i18next.addResources(LanguageList.ENGLISH, "Home", {
    Title: "Title",
    Paragraph:
        "English Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus dictum est, vel tincidunt enim iaculis nec. Cras vitae placerat nunc. Maecenas eu neque ac enim ullamcorper condimentum ut id ex. Donec porta vel justo at interdum. Curabitur vitae diam leo. Pellentesque a efficitur nulla. Suspendisse facilisis eu enim eu tempor. Fusce erat metus, tempor quis lacus nec, accumsan ornare erat. Sed viverra et tellus at mattis.",
    SignUp: "Sign up",
    LogIn: "Log in",
    ImageAlt: "Dog or Cat Image"
});
