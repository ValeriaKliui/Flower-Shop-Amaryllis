import mainScreenPic from "../assets/icons/girl.svg";

export const MainScreen: React.FC = () => {
  return (
    <div className="wrapper main-screen">
      <div className="main-screen__text">
        <h2 className="main-screen__title">
          Make a <span className="text_bright">Beautiful Garden </span>
          with our help
        </h2>
        <p>Flowers are our truest language. </p>
        <p>Our plants scent to imbue immense joy without a single word.</p>
      </div>
      <div className="main-screen__media">
        <img
          className="main-screen__pic"
          src={mainScreenPic}
          alt="Make a Beautiful Garden with Your own Hand"
        />
      </div>
    </div>
  );
};
