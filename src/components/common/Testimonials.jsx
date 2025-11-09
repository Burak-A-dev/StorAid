import React, { useEffect, useState} from "react";
import Background from "../../assets/Testimonials.svg";
import TestimonialsCard from "./TestimonialsCard";

export default function Testimonials() {

const [reviews, setReview] = useState([]);

useEffect(() => {
  const fetchTestimonials = async () => {
    try {
      const response = await fetch(
        "https://win25-jsf-assignment.azurewebsites.net/api/testimonials"
      );

      if (response.ok) {
        const data = await response.json();
        setReview(data)
        console.log(data)
      } else {
        console.log("Fetch failed with status:", response.status);
      }
    } catch (err) {
      console.error("Error fetching testimonials:", err);
    }
  };

  fetchTestimonials();
}, []);


  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="w-full bg-cover bg-center relative"
    >
      <div className="absolute inset-0 bg-green-950/75"></div>

      <div className="flex flex-col items-center text-center relative z-10 px-4 py-16">
        <h4 className="text-xl font-semibold text-amber-400">Testimonials</h4>
        <h2 className="text-white text-5xl font-bold mt-2">See What Our Clients Have to Say</h2>
        <p className="text-white text-d mt-2 max-w-5xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
        </p>


        <div className="flex flex-row flex-wrap justify-center gap-4 mt-8">
        {reviews.map((item) => (
        <TestimonialsCard
        key={item.id}
        name={item.name}
        companyName={item.companyName}
        comment={item.comment}
        rating={item.rating}
        avatarUrl={item.avatarUrl}
        />
      ))}
      </div>
      </div>
    </div>
  );
}
