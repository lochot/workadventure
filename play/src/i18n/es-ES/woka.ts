import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const woka: DeepPartial<Translation["woka"]> = {
    customWoka: {
        title: "Personalice su Avatar",
        navigation: {
            return: "Volver",
            back: "Atrás",
            finish: "Acabar",
            next: "Siguiente",
        },
    },
    selectWoka: {
        title: "Seleccionar su Avatar",
        continue: "Continuar",
        customize: "Personalizar su Avatar",
    },
    menu: {
        businessCard: "Tarjeta de visita",
    },
};

export default woka;
