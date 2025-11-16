import CTAButton from "../common/CTAButton";
import { FaPhoneAlt } from 'react-icons/fa';
import Tile from "../common/Tile";

export default function AboutUs({button}) {
  return (
    <div className="mt-10">
        <div className='flex flex-row gap-10 p-4 align-center justify-center items-center mt-6'>
 <div className="flex flex-col items-center">
  <div className="bg-gray-300 w-120 h-80 border-4 border-gray-100"></div>

  <div className="flex flex-row justify-center items-center gap-6 bg-green-950 p-5 w-110 h-28 rounded-md mt-6">
    <div className="flex flex-col justify-center items-center py-6">
      <h2 className="text-amber-400 text-4xl font-bold">12+</h2>
      <h5 className="text-white text-sm">Years of Experience</h5>
    </div>
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-amber-400 text-4xl font-bold">150K+</h2>
      <h5 className="text-white text-sm">Satisfied Clients</h5>
    </div>
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-amber-400 text-4xl font-bold">35+</h2>
      <h5 className="text-white text-sm">Warehouse</h5>
    </div>
  </div>
</div>

        <div className="flex flex-col gap-1 w-130 self-center p-2 h-105">
            <h3 className="text-amber-400 font-bold">About Us</h3>
            <h2 className="text-green-950 text-4xl font-bold">Providing a Safe Space for Your Treasured Items</h2>
            <p className="text-green-950 text-base/4 mb-4 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</p>

            <div className='flex flex-row gap-4'>

            <Tile
              title="Vision"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium"
            />

            <Tile
              title="Mission"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium"

            />

            </div>

            <div className="flex flex-row gap-18 justify-start mt-8">
                <CTAButton text="Discover More" className="self-start" />

                <div className="flex flex-row items-center justify-center gap-4">
                    <FaPhoneAlt className="text-amber-400 bg-green-950 w-10 h-auto p-2 rounded-full" />
                    <div className="flex flex-col">
                        <h4 className="text-green-950 text-md font-bold">More Information</h4>
                        <h5 className="text-green-950 text-md font-bold">+46 8 123 122 44</h5>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
