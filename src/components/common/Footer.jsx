import React from 'react'

export default function Footer() {
  return (
    <div className="flex justify-around items-center bg-green-950 text-white h-18 p-3 text-xs">
      <h4 className="text-xs font-normal">
        © 2025 StorAid, All rights reserved.
      </h4>

      <div className="flex gap-5 items-center">
        <a href="" className="flex items-center text-xs">
          <span className="mr-1 font-bold text-black bg-white rounded-full w-3 h-3 flex items-center justify-center text-[8px]">
            &#10095;
          </span>
          Terms & Conditions
        </a>

        <a href="" className="flex items-center text-xs">
          <span className="mr-1 font-bold text-black bg-white rounded-full w-3 h-3 flex items-center justify-center text-[8px]">
            &#10095;
          </span>
          Privacy Policy
        </a>
      </div>
    </div>
  )
}
