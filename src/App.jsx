import TestimonialsCard from "./components/common/TestimonialsCard";

function App() {
  return (
    <div>
      <TestimonialsCard
        name="Carrisa Jocelyn"
        role="Customer"
        review="Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante."
        rating={5}
        avatar=""
      />
    </div>
  );
}

export default App;