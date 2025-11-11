/* ChatGPT användes för att lösa ett problem gällande hover funktionalitet på kortet */

import { IoMdCheckmarkCircle } from "react-icons/io";

export default function PricingCard({ title, price }) {
  return (
    <div className="w-90 mx-auto p-6 bg-[#f1ffea] rounded-xl border-3 border-gray-100 hover:bg-green-900 group">
      
      <h3 className="text-2xl font-semibold text-green-900 text-center mb-6 group-hover:text-white">
        {title}
      </h3>

      <div className="flex items-center justify-center mb-6">
        <span className="text-3xl font-semibold text-amber-400 mr-1 relative bottom-6 mr-2">$</span>
        <span className="text-7xl font-bold text-amber-400 leading-none mr-6">
          {price}
        </span>
        <span className="text-xl text-green-900 font-bold ml-2 self-end group-hover:text-white">
          /month
        </span>
      </div>

      <p className="text-base text-green-900 text-center mb-6 px-2 leading-relaxed group-hover:text-white">
        Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.
      </p>

      <hr className="border-t border-green-900 mb-6 group-hover:border-white" />

      <ul className="space-y-3 mb-8">
        <li className="text-lg flex items-center justify-start text-green-900 group-hover:text-white">
          <IoMdCheckmarkCircle className="bg-[#f1ffea] rounded-full w-6 h-auto mr-2 self-center text-green-900 group-hover:text-amber-400 group-hover:bg-green-900" /> Nam nec ipsum in dolor
        </li>
        <li className="text-lg flex items-center justify-start text-green-900 group-hover:text-white">
          <IoMdCheckmarkCircle className="bg-[#f1ffea] rounded-full w-6 h-auto mr-2 self-center text-green-900 group-hover:text-amber-400 group-hover:bg-green-900" /> Fusce nec ligula ut arcu
        </li>
        <li className="text-lg flex items-center justify-start text-green-900 group-hover:text-white">
          <IoMdCheckmarkCircle className="bg-[#f1ffea] rounded-full w-6 h-auto mr-2 self-center text-green-900 group-hover:text-amber-400 group-hover:bg-green-900" /> Aliquam pulvinar arcu in
        </li>
        <li className="text-lg flex items-center justify-start text-green-900 group-hover:text-white">
          <IoMdCheckmarkCircle className="bg-[#f1ffea] rounded-full w-6 h-auto mr-2 self-center text-green-900 group-hover:text-amber-400 group-hover:bg-green-900" /> Duis gravida enim porta
        </li>
        <li className="text-lg flex items-center justify-start text-green-900 group-hover:text-white">
          <IoMdCheckmarkCircle className="bg-[#f1ffea] rounded-full w-6 h-auto mr-2 self-center text-green-900 group-hover:text-amber-400 group-hover:bg-green-900" /> Etiam eget libero non ligula
        </li>
      </ul>

      <div className="flex justify-center">
        <button 
          className="w-50 py-3 bg-amber-400 text-green-900 font-bold text-lg rounded-lg"
          onClick={() => console.log('Rent Now clicked')}
        >
          Rent Now
        </button>
      </div>
    </div>
  );
}
