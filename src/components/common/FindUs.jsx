import SocialButtons from './SocialButtons';
import { FaPhoneAlt } from 'react-icons/fa';
import { PiEnvelope } from "react-icons/pi";
import icon from '../../assets/find-img.svg';
import location from '../../assets/location.svg'

export default function FindUs() {
  return (
    <div className="flex flex-row items-stretch justify-center gap-4 h-150 bg-[#365349]">

      <div className="flex flex-col justify-end items-center gap-6 h-full">
        <img src={icon} alt="Silhouette of a person" className="w-130 h-auto" />
      </div>

      <div className="flex flex-col justify-center items-start gap-3 w-150 h-full bg-[#9fb3a3] p-6">
        <h2 className="text-5xl text-green-950 font-bold">Find Us On;</h2>
        <p className='text-md'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className="flex flex-col gap-6">

          <div className="flex items-center gap-3">
            <PiEnvelope className="text-amber-400 bg-green-950 w-14 h-auto p-2 rounded-full" />
            <div className='flex flex-col justify-center items-start'>
              <h3 className="text-2xl font-semibold">Email Address</h3>
              <h4 className="text-lg">contact@domain.com</h4>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-amber-400 bg-green-950 w-14 h-auto p-2 rounded-full" />
            <div className='flex flex-col justify-center items-start'>
              <h3 className="text-2xl font-semibold">Call Center</h3>
              <h4 className="text-lg">+46 8 123 122 44</h4>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <img
              className="bg-green-950 w-14 p-4 rounded-full"
              src={location}
            />
            <div className="flex flex-col gap-2">
              <div className='flex flex-col justify-center items-start'>
                <h3 className="text-2xl font-semibold">Location</h3>
                <h4 className="text-lg">Klarabergsviadukten 90, Stockholm</h4>
              </div>

              <div className="flex flex-row items-center justify-center gap-6 my-4 w-full">
                <h3 className="text-2xl font-semibold text-green-950">Our Social Media</h3>
                <div className="border-b-3 w-20 bg-green-950"></div>
                <div className="flex flex-row gap-2">
                    <SocialButtons logo="facebook" onClick={() => window.open('https://facebook.com', '_blank')} />
                    <SocialButtons logo="x" onClick={() => window.open('https://twitter.com', '_blank')} />
                    <SocialButtons logo="instagram" onClick={() => window.open('https://instagram.com', '_blank')} />
                    <SocialButtons logo="youtube" onClick={() => window.open('https://youtube.com', '_blank')} />
                </div>
                </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}