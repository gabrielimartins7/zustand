import { useCronometroStore } from "../../../store";

import styles from "./styles.module.css";
import play_arrowImg from "/src/assets/imgs/play_arrow.png";
import pauseImg from "/src/assets/imgs/pause.png";
import audioPlaySom from "/src/assets/sons/play.wav";
import audioPauseSom from "/src/assets/sons/pause.mp3";

export default function BotaoCronometro() {
  const intervaloId = useCronometroStore((estado) => estado.intervaloId);
  const iniciarCronometro = useCronometroStore((estado) => estado.iniciarCronometro);
  const pausarCronometro = useCronometroStore((estado) => estado.pausarCronometro);

  const audioPlay = new Audio(audioPlaySom);
  const audioPause = new Audio(audioPauseSom);

  function iniciarOuPausar() {
    if (!intervaloId) {
      audioPlay.play();
      iniciarCronometro();
    } else {
      audioPause.play();
      pausarCronometro();
    }
  }


  const textoIniciarOuPausar = intervaloId ? "Pausar" : "Começar";
  const iconeIniciarOuPausar = intervaloId ? pauseImg : play_arrowImg;

  return (
    <div className={styles["cronometer__primary-button-wrapper"]}>
      <button className={styles["cronometer__primary-button"]} onClick={iniciarOuPausar}>
        <img
          className={styles["cronometer__primary-button-icon"]}
          src={iconeIniciarOuPausar}
          alt=""
        />
        <span>{textoIniciarOuPausar}</span>
      </button>
    </div>
  );
}