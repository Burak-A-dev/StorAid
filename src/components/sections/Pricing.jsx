import PricingCard from "../common/PricingCard";

export default function Pricing() {
  return (
    <section className="flex flex-col items-centera justify-center py-20 bg-white">
      <div className="flex flex-col justify-center items-center w-full max-w-[calc(100%-4rem)] mx-auto">

        <div className="flex justify-center w-full mb-10 relative right-125">
          <div className="text-left"> 
            <h4 className="text-[#FFC72C] font-xl font-bold mb-2">Pricing Plan</h4> 
            
            <h2 className="text-4xl font-extrabold text-[#0b3018] max-w-md leading-snug">
              Find the Perfect Plan for Your Storage Needs
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3">
          <PricingCard title="Small Unit" price="50" />
          <PricingCard title="Medium Unit" price="100" />
          <PricingCard title="Large Unit" price="150" />
          <PricingCard title="Executive Unit" price="200" />
        </div>
      </div>
    </section>
  );
}