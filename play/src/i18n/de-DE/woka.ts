import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const woka: DeepPartial<Translation["woka"]> = {
    customWoka: {
        title: "Dein Avatar bearbeiten",
        navigation: {
            return: "Zurück",
            back: "Hoch",
            finish: "Auswählen",
            next: "Runter",
        },
    },
    selectWoka: {
        title: "Dein Avatar auswählen",
        continue: "Auswählen",
        customize: "Bearbeite dein Avatar",
    },
    menu: {
        businessCard: "Visitenkarte",
    },
};

export default woka;
