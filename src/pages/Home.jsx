import Hero from '../components/sections/Hero';
import AboutUs from '../components/sections/AboutUs';
import Logos from '../components/sections/Logos';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import ChooseUs from '../components/sections/ChooseUs';
import Pricing from '../components/sections/Pricing';
import Looking from '../components/sections/Looking';
import Blog from '../components/sections/Blog';


export default function Home() {
  return (
    <div>
        <Hero
        h3="Welcome to StorAid"
        h1="Space Simplified, Storage Perfected"
        p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor."
        />
        <AboutUs/>
        <Logos/>
        <Services/>
        <Testimonials/>
        <ChooseUs/>
        <Pricing/>
        <Looking/>
        <Blog/>
    </div>
  )
}