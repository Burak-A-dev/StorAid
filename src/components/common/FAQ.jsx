import { useEffect, useState } from "react";
import FaqAccordion from "./FaqAccordion";

export default function FAQ() {

    const [faq, setFaqs] = useState([]);

    useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://win25-jsf-assignment.azurewebsites.net/api/faqs"
        );

        if (response.ok) {
          const data = await response.json();
          setFaqs(data);
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
    <div className="flex flex-row justify-around items-center mt-20 mx-auto w-300">
        <div className="w-150 self-start flex flex-col gap-2">
        <h4 className="text-amber-400 text-lg font-semibold">FAQs</h4>
        <h2 className="text-green-950 text-6xl font-bold">Frequently Ask Questions</h2>  
        <p className="text-green-900 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>

        <div className="">

        {faq.map((item) => (
            <FaqAccordion
            key={item.id}
            title={item.title}
            description={item.description}
            />
        ))}
        </div>
    </div>
  )
}

/*
"id": 4,
    "title": "Can I change the size of my storage unit if I need more space?",
    "description": "Absolutely. You can upgrade or downsize your unit at any time based on availability. Our team will help you find the right size to fit your changing storage needs without hassle."
  }, 
 */