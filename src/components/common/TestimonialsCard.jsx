// components/Testimonials/TestimonialsCard.jsx
import { MdOutlineFormatQuote } from "react-icons/md";

const TestimonialsCard = ({ name, companyName, comment, rating, avatarUrl }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push("★");
  }

  return (
    <div className="relative bg-white rounded-xl border border-gray-200 p-6 max-w-md mx-auto flex flex-col gap-6">
      <div className="flex gap-1 text-[#133D2E] text-xl">
        {stars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>

      <p className="text-[#133D2E] text-base leading-relaxed">
        {comment}
      </p>

      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-lg text-[#133D2E]">{name}</h4>
          <p className="text-[#133D2E]/70 text-base">{companyName}</p>
        </div>
      </div>

      <MdOutlineFormatQuote className="absolute bottom-1 right-2 text-[#FFCC00] text-8xl opacity-80" />
    </div>
  );
};

export default TestimonialsCard;
