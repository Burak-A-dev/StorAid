import Hero from '../components/sections/Hero';
import AboutUs from '../components/sections/AboutUs';
import Logos from '../components/sections/Logos';
import Testimonials from '../components/sections/Testimonials';
import ChooseUs from '../components/sections/ChooseUs';

export default function About() {
  return (
    <div>
            <Hero
            showH3={false}
            h1="About Us"
            p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            showButton={false}
            showImage={false}
            />
            <AboutUs/>
            <Logos/>
            <Testimonials/>
            <ChooseUs/>
        </div>
  )
}
