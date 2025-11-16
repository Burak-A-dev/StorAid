import icon1 from '../../assets/Logoipsum-1.svg';
import icon2 from '../../assets/Logoipsum-2.svg';
import icon3 from '../../assets/Logoipsum-3.svg';
import icon4 from '../../assets/Logoipsum-4.svg';
import icon5 from '../../assets/Logoipsum-5.svg';

export default function Logos() {
  return (
    <div className="flex flex-row justify-center items-center gap-8 h-30 bg-yellow-50 mt-20">
      <img className='h-16' src={icon1} alt="Logoipsum logo" />
      <img className='h-16' src={icon2} alt="Logoipsum logo" />
      <img className='h-16' src={icon3} alt="Logoipsum logo" />
      <img className='h-16' src={icon4} alt="Logoipsum logo" />
      <img className='h-16' src={icon5} alt="Logoipsum logo" />
    </div>
  );
}
