import { FaCalendarMinus } from "react-icons/fa";

const BlogCard = ({ title, description, created, imageUrl }) => {
  return (
    <div className="bg-green-950 rounded-sm border border-gray-700 p-6 flex flex-col gap-4 w-80 flex-1">
      <div className="w-full h-48 bg-gray-300 rounded-sm overflow-hidden">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="flex items-center gap-2 text-gray-300 text-sm hover:bg-[#f1ffea]">
        <FaCalendarMinus className="text-xl" />
        <span className="text-gray-300">
          {created
            ? new Date(created).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "No date"}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-white">{title}</h3>

      <p className="text-gray-300 line-clamp-4">{description}</p>

      <a
        href="#"
        className="mt-auto inline-flex items-center text-yellow-500 hover:text-yellow-400 font-semibold transition duration-150 text-lg"
      >
        Read more &rarr;
      </a>
    </div>
  );
};

export default BlogCard;
