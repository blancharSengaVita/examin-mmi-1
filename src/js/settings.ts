export const settings = {
    canvas: {
        snake: {domSelector: "#snake", ctx: "2d"},
        food: {domSelector: "#food", ctx: "2d"},
        fps: 4
    },
    snake: {
        unit: 20,
        color: "#252422",
        initialCount: 6,
        borderWidth: 3,
    },
    food: {radius: 10, color: "#EB5E28", number: 1},
    score: {
        domSelector: ".game__score span"
    },
    forms: {
        domSelector: ".game__play",
        messageSelector: ".game__play__message",
        inputSelector: ".game__play__score",
        hideClass: "hide",
        messages: {
            selfEating: "Oh non ! Le serpent s'est mordu la queue...",
            goOut: "Oh non ! Le serpent s’est pris la tête dans le mur...",
        },
    }
}