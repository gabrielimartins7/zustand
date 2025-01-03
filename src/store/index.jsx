import { create } from "zustand";

export const MODO_CRONOMETRO = {
    FOCO: {
        id: "foco",
        nome: "Foco",
        frase: ["Otimize sua produtividade,", "mergulhe no que importa."],
        tempoInicialEmSegundos: 30,
    },
    DESCANSO_CURTO: {
        id: "descansoCurto",
        nome: "Descanso Curto",
        frase: ["Que tal dar uma respirada?", "Faça uma pausa curta."],
        tempoInicialEmSegundos: 5,
    },
    DESCANSO_LONGO: {
        id: "descansoLongo",
        nome: "Descanso Longo",
        frase: ["Hora de voltar à superficie.", "Faça uma pausa longa."],
        tempoInicialEmSegundos: 15,
    }
}

export const useCronometroStore = create((set) => ({
    modoCronometro: MODO_CRONOMETRO.FOCO,
    tempoInicialEmSegundos: MODO_CRONOMETRO.FOCO.tempoInicialEmSegundos,

    setModoCronometro: (novoModo) => {
        set({
            modoCronometro: novoModo,
            tempoInicialEmSegundos: novoModo.tempoInicialEmSegundos,
        })
    }
}))