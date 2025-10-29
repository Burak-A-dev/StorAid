import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6';

const socialLogos = {
  facebook: <FaFacebookF size={20} />,
  x: <FaXTwitter size={20} />,
  instagram: <FaInstagram size={20} />,
  youtube: <FaYoutube size={20} />,
};

export default function CTAButton({ text, onClick, type = "button", logo, className = "" }) {
  const LogoComponent = socialLogos[logo];

  return (
    <button
      className={`bg-amber-400 text-green-950 text-sm font-medium rounded-md flex items-center justify-center px-6 py-3 cursor-pointer space-x-2 ${className}`}
      onClick={onClick}
      type={type}
    >
      {LogoComponent && <span className="logo-icon">{LogoComponent}</span>}
      {text && <span>{text}</span>}
    </button>
  );
}
