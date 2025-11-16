import Hero from '../components/sections/Hero';
import FAQ from '../components/sections/FAQ';
import FindUs from '../components/sections/FindUs';

export default function Contact() {
  return (
    <div>
            <Hero
            showH3={false}
            h1="Contact Us"
            p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            showButton={false}
            showImage={false}
            />
            <FAQ/>
            <FindUs/>
        </div>
  )
}
