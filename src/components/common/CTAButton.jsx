export default function CTAButton({ text, onClick, type = "button", className = "" }) {
  return (
    <button
      className={`bg-amber-400 text-green-950 text-sm font-medium rounded-md flex items-center justify-center px-6 py-3 cursor-pointer ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
