// ChatGPT användes för att få hjälp med delarna i accordion gällande open/closed samt med useState

import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="rounded-lg mb-4 w-full max-w-xl mx-auto overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center px-5 py-3 transition-colors duration-300
          ${isOpen ? "bg-amber-400 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
      >
        <span className="font-medium">{title}</span>
        <IoIosArrowDown
          className={`text-xl transition-transform duration-300 transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      <div
        ref={contentRef}
        style={{ height: height }}
        className="px-5 overflow-hidden transition-all duration-300 bg-white"
      >
        <div className="py-3 text-lg">{description}</div>
      </div>
    </div>
  );
};

export default Accordion;