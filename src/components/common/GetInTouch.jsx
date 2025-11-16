import CTAButton from "../common/CTAButton";
import InputField from "../common/InputField";

export default function GetInTouch() {

    function handleSubmit(event) {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const phoneNumber = event.target.phone.value;
        const subject = event.target.subject.value;
        const comment = event.target.comment.value;

        const dataToSend = { email, name, phoneNumber, subject, comment };

        // Log the data before sending
        console.log("Sending data:", dataToSend);

        fetch("https://win25-jsf-assignment.azurewebsites.net/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataToSend)
        })
        .then((res) => res.json())
        .then((resData) => {
            console.log("Response from API:", resData);
        })
        .catch((err) => {
            console.error("Error sending data:", err);
        });
    }

  return (
    <div className="flex flex-row justify-between items-center w-400 gap-12 py-10 px-6 mx-auto mt-20">
      <div className="w-1/2 flex flex-col">
        <h3 className="text-amber-500 text-sm font-semibold">Get In Touch</h3>
        <h2 className="text-green-950 text-5xl font-bold leading-snug w-full">
          Get Personalized Assistance - Contact Us
        </h2>
        <p className="text-zinc-600 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className="w-180 h-90 bg-zinc-300 rounded-md mt-4"></div>
      </div>

      <div className="w-1/2 bg-[#faf8ec] p-8 rounded-xl shadow-sm h-150">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <InputField label="Your Name" name="name" required={true} className="w-full" />

          <div className="flex gap-6 flex-wrap w-full">
            <InputField label="Email" name="email" type="email" required={true} />
            <InputField label="Telephone" name="phone" required={false} />
          </div>

          <InputField label="Subject" name="subject" required={true} className="w-full" />
          <InputField label="Comments / Questions" name="comment" required={true} className="w-full h-50" />

          <CTAButton text="Submit" type="submit" className="w-32" />
        </form>
      </div>
    </div>
  );
}