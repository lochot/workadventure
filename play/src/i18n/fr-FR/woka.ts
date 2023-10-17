import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const woka: DeepPartial<Translation["woka"]> = {
    customWoka: {
        title: "Personnalisez votre Avatar",
        navigation: {
            return: "Retour",
            back: "Précédent",
            finish: "Terminer",
            next: "Suivant",
        },
    },
    selectWoka: {
        title: "Sélectionnez votre Avatar",
        continue: "Continuer",
        customize: "Personnalisez votre Avatar",
    },
    menu: {
        businessCard: "Carte de visite",
    },
};

export default woka;
