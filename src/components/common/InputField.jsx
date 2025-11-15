export default function InputField() {
  return (
    <div className="bg-zinc-900">
        <input
              className="m-50 border-3 text-amber-400 p-4 border-amber-400 h-12 w-80 rounded-sm focus:border-green-950"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
    </div>
  )
}
