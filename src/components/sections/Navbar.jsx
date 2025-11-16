import { Link } from 'react-router-dom';
import icon from '../../assets/Storaid-logo.svg';
import CTAButton from '../common/CTAButton';
import SocialButtons from '../common/SocialButtons';

const Navbar = () => {
  return (
    <div className="flex flex-col">

      <div className="flex items-center flex-[1] justify-between bg-green-950 px-2 h-7">
        <div className="flex gap-2 text-white">
          <a href="">+46 8 123 122 44</a>
          <a href="">contact@domain.com</a>
        </div>

        <div className="flex gap-1 text-white p-1">
          <SocialButtons logo="facebook" onClick={() => window.open('https://facebook.com', '_blank')} />
          <SocialButtons logo="x" onClick={() => window.open('https://twitter.com', '_blank')} />
          <SocialButtons logo="instagram" onClick={() => window.open('https://instagram.com', '_blank')} />
          <SocialButtons logo="youtube" onClick={() => window.open('https://youtube.com', '_blank')} />
        </div>
      </div>

      <div className="flex items-center flex-[2] justify-between bg-white px-2 h-40 px-6">
        <div>
          <img src={icon} alt="Logo" className="h-18 py-4" />
        </div>

        <div className="flex gap-2">
          <Link className="active:text-yellow-500" to="/">Home</Link>
          <Link className="active:text-yellow-500" to="/about">About us</Link>
          <Link className="active:text-yellow-500" to="/services">Services</Link>
          <Link className="active:text-yellow-500" to="/contact">Contact us</Link>
        </div>

        <CTAButton text="Book Now" />
      </div>

    </div>
  );
};

export default Navbar;