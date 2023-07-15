import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const woka: DeepPartial<Translation["woka"]> = {
    customWoka: {
        title: "Personalitzar el vostre Avatar",
        navigation: {
            return: "Tornar",
            back: "Enrere",
            finish: "Acabar",
            next: "Segūent",
        },
    },
    selectWoka: {
        title: "Seleccionar el vostre Avatar",
        continue: "Continuar",
        customize: "Personalitzar el vostre Avatar",
    },
    menu: {
        businessCard: "Targeta de visita",
    },
};

export default woka;
