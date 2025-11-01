import React from 'react'
import CTAButton from "./CTAButton";

export default function AboutUs({button}) {
  return (
    <div>
        <div className='flex flex-row gap-10 p-4 align-center justify-center items-center'>
        {/* Left side */}
        <div className="w-120">
            <div className="bg-gray-300 w-20 h-20"></div>
            <div className="bg-green-950 p-4">
                <div className="">
                    <h2 className="text-amber-400 text-4xl font-bold">12+</h2>
                    <h5 className="text-white text-sm">Years of Experience</h5>
                </div>
                <div className="">
                    <h2 className="text-amber-400 text-4xl font-bold">150K+</h2>
                    <h5 className="text-white text-sm">Satisfied Clients</h5>
                </div>
                <div className="">
                    <h2 className="text-amber-400 text-4xl font-bold">35+</h2>
                    <h5 className="text-white text-sm">Warehouse</h5>
                </div>
            </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-2 w-120">
            <h3 className="text-amber-400">About Us</h3>
            <h2 className="text-green-950">Providing a Safe Space for Your Treasured Items</h2>
            <p className="text-green-950">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</p>

            {/* Vision - Mission */}
            <div className='flex flex-row gap-4'>
            <div className="w-70 h-30 border-2 rounded-md p-3">
                <h4 className="text-green-950">Vision</h4>
                <p className="text-green-950">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
            </div>

            <div className="w-70 h-30 border-2 rounded-md p-3">
                <h4 className="text-green-950">Mission</h4>
                <p className="text-green-950">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
            </div>
            </div>

            <div className="flex flex-row gap-8">
                <CTAButton text="Discover More" className="self-start" />

                <div className="">
                    <img src="" alt="" />
                    <div className="">
                        <h4 className="text-green-950">More Information</h4>
                        <h5 className="text-green-950">+46 8 123 122 44</h5>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
