import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6';

const socialLogos = {
  facebook: <FaFacebookF size={20} />,
  x: <FaXTwitter size={20} />,
  instagram: <FaInstagram size={20} />,
  youtube: <FaYoutube size={20} />,
};

export default function SocialButtons({ onClick, type = "button", logo }) {
  const LogoComponent = socialLogos[logo];

  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-amber-400 text-green-950 rounded-full flex items-center justify-center cursor-pointer w-7 h-7 p-1"
    >
      {LogoComponent}
    </button>
  );
}
