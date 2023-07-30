import flower1 from '../assets/icons/footer_pic1.svg';
import flower2 from '../assets/icons/footer_pic2.svg';
import flower3 from '../assets/icons/footer_pic3.svg';
import flower4 from '../assets/icons/footer_pic4.svg';
import flower5 from '../assets/icons/footer_pic5.svg';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer__flowers">
          <img src={flower1} alt="flower" className="footer_flower" />
          <img src={flower2} alt="flower" className="footer_flower" />
          <img src={flower3} alt="flower" className="footer_flower" />
          <img src={flower4} alt="flower" className="footer_flower" />
          <img src={flower5} alt="flower" className="footer_flower" />
        </div>
      </div>
    </div>
  );
};
