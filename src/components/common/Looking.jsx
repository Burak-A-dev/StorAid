import CTAButton from "./CTAButton";

export default function Looking() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#365349] h-90">
        <div className="flex flex-col justify-center items-center gap-5">
            <h2 className="text-white text-5xl font-semibold text-center w-250">Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us.</h2>
            <p className="text-white text-center w-230">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
            <CTAButton
            text="Book Now"/>
        </div>
    </div>
  )
}
