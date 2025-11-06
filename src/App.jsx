import TestimonialsCard from "./components/common/TestimonialsCard";

function App() {
  return (
    <div>
      <TestimonialsCard
        name="Carrisa Jocelyn"
        comment="Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante."
        rating={1}
        companyName="Apple"
      />
    </div>
  );
}

export default App;