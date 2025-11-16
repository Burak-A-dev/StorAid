import CTAButton from "../common/CTAButton";
import icon from '../../assets/Hero-Silhouette.svg';

export default function Hero({
  h3,
  h1,
  p,
  showH3 = true,
  showButton = true,
  showImage = true
}) {
  return (
    <div className="bg-[#365349] h-120 px-20 flex flex-row align-center justify-around items-center">
      <div className="flex flex-col gap-2 w-110">
        {showH3 && h3 && <h3 className="text-amber-400 font-medium">{h3}</h3>}
        {h1 && <h1 className="text-emerald-50 text-5xl font-bold">{h1}</h1>}
        {p && <p className="text-white text-sm font-light">{p}</p>}
        {showButton && <CTAButton text="Discover More" className="self-start" />}
      </div>

      {showImage && (
        <div className="self-end w-80">
          <img
            src={icon}
            alt="Silhouette of a person"
          />
        </div>
      )}
    </div>
  );
}
