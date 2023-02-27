import styles from "./Game.module.css";

const Game = ({ verifyLetter }) => {
  return (
    <div className="game">
      <p className="points"></p>
      <span>Pontuação: 000</span>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>Dica...</span>{" "}
      </h3>

      <div className="wordContaqiner">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra: </p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        <span>a, </span>
        <span>b, </span>
        <span>c, </span>
      </div>
    </div>
  );
};

export default Game;
