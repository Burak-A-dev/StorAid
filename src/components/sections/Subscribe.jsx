import CTAButton from "../common/CTAButton";

export default function Subscribe() {

  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    fetch("https://win25-jsf-assignment.azurewebsites.net/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  }

  return (
    <div className="flex justify-center items-center bg-[#faf8ec] py-6">
      <div className="flex flex-row items-center justify-around gap-10 w-400 mx-auto p-4">
        <div className="flex flex-col items-left p-2">
          <h2 className="text-green-950 text-5xl font-bold text-left p-1">Subscribe Our Newsletter</h2>
          <p className="mt-2 text-green-950 text-lg p-1 text-center">
            Subscribe to our newsletter to receive early discount offers, updates and info
          </p>
        </div>
        <div className="p-2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-row gap-2 items-center p-2"
          >
            <input
              className="border-2 bg-white p-4 border-gray-200 h-12 w-80 rounded-sm focus:outline-2 focus:outline-amber-400 focus:border-0"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <CTAButton text="Submit" type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}