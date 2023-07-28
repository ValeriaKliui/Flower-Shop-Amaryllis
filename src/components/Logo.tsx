import logo from '../assets/icons/logo.svg';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo Amaryllis" className="logo__img" />
      <div className="logo__text">
        <h1 className="logo__title">Amaryllis</h1>
        <p className="subtext">make a beautiful garden</p>
      </div>
    </div>
  );
};

export default Logo;
