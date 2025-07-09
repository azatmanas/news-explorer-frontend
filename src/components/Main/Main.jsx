import backgroundImage from "../../assets/background.svg";
import "./Main.css";

function Main() {
  return (
    <div className="main__container">
      <img
        src={backgroundImage}
        alt="background"
        className="main__background"
      />
    </div>
  );
}

export default Main;
