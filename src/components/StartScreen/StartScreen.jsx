import styles from "./StartScreen.module.css";

const StartScreen = () => {
  return (
    <div className={styles.start}>
      <h1>Secret Word</h1>
      <p>Clique no botão abaio para começar a jogar</p>
      <button>Começar o jogo</button>
    </div>
  );
};

export default StartScreen;
