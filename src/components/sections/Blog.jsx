import { useEffect, useState } from "react";
import BlogCard from "../common/BlogCard";

export default function Blog() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://win25-jsf-assignment.azurewebsites.net/api/blogs"
        );

        if (response.ok) {
          const data = await response.json();
          setBlog(data);
        } else {
          console.log("Fetch failed with status:", response.status);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-500 mb-6 text-start relative top-3">
          Latest Blog and News
        </h4>

        <div className="flex flex-row items-start gap-6 mb-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 md:w-1/2">
            Check Out Our Latest Blog and News Update
          </h2>
          <p className="text-lg text-gray-600 md:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris
            ac blandit nisi non sodales augue.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center items-stretch">
          {blog.map((item) => (
            <BlogCard
              key={item.id}
              created={item.created}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
