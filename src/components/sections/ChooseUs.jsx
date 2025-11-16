import { RiLock2Fill } from "react-icons/ri";
import { BsClockFill } from "react-icons/bs";
import moneyBagIcon from '../../assets/MoneyBag.svg';
import broomIcon from '../../assets/Broom.svg';

function IconCircle({ children }) {
  return (
    <div className="w-20 h-20 bg-green-900 rounded-full flex items-center justify-center shrink-0 overflow-hidden">
      {children}
    </div>
  );
}

export default function ChooseUs() {
  return (
    <div className="flex justify-center pb-10 bg-amber-50">
      <div className="max-w-7xl w-full px-8 pb-5">
        <div className="grid grid-cols-2 grid-rows-6 h-full gap-3">

          <h3 className="row-start-1 row-end-2 col-start-1 col-end-2 text-lg font-bold text-amber-400 self-end">
            Why Choose Us
          </h3>

          <h2 className="row-start-2 row-end-3 col-start-1 col-end-2 text-3xl font-bold text-green-900 mt-0">
            Choose Us for Exceptional Storage Solutions
          </h2>

          <div className="flex items-start gap-3 row-start-3 row-end-4 col-start-1 col-end-2">
            <IconCircle>
              <RiLock2Fill className="text-amber-400 w-12 h-12" />
            </IconCircle>
            <div className="space-y-1">
              <h3 className="font-semibold text-lg text-green-900">Security and Safety</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 row-start-4 row-end-5 col-start-1 col-end-2">
            <IconCircle>
              <img src={moneyBagIcon} alt="Money Bag" className="w-12 h-12 object-contain" />
            </IconCircle>
            <div className="space-y-1">
              <h3 className="font-semibold text-lg text-green-900">Flexible and Affordable</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 row-start-5 row-end-6 col-start-1 col-end-2">
            <IconCircle>
              <img src={broomIcon} alt="Clean Facilities" className="w-12 h-12 object-contain" />
            </IconCircle>
            <div className="space-y-1">
              <h3 className="font-semibold text-lg text-green-900">Clean and Well-Maintained Facilities</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 row-start-6 row-end-7 col-start-1 col-end-2">
            <IconCircle>
              <BsClockFill className="text-amber-400 w-12 h-12" />
            </IconCircle>
            <div className="space-y-1">
              <h3 className="font-semibold text-lg text-green-900">24/7 and Convenient Access</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-start row-start-2 row-end-7 col-start-2 col-end-3 gap-3">
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
            </p>
            <span className="bg-gray-300 w-145 h-95 border-4 border-gray-100"></span>
          </div>

        </div>
      </div>
    </div>
  );
}
