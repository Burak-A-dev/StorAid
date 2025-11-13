import { MdOutlineFormatQuote } from "react-icons/md";

const TestimonialsCard = ({ name, companyName, comment, rating, avatarUrl }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push("★");
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-md mx-auto flex flex-col gap-6">
      <div className="flex gap-1 text-green-950 text-3xl">
        {stars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>

      <div className="flex justify-center items-center">
      <p className="text-green-950 text-start text-lg">
        {comment}
      </p>
      </div>
      
      <div className="relative flex items-center justify-between mt-auto">
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
            <h4 className="font-semibold text-xl text-green-950">{name}</h4>
            <p className="text-gray-500/70 text-xl text-left">{companyName}</p>
          </div>
        </div>

        <MdOutlineFormatQuote className="absolute right-0 text-amber-400 text-8xl" />
      </div>
    </div>
  );
};

export default TestimonialsCard;