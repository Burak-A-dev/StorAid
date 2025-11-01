import Hero from "./components/common/Hero";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero
  h3="Welcome to StorAid"
  h1="Space Simplified, Storage Perfected"
  p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor."
  img="/hero-image.jpg"
  
/>
    </div>
  );
}

export default App;