export default function Tile({ title, description }) {
  return (
    <div>
        <div className="flex flex-col items-start justify-center p-6 border-3 border-gray-200 rounded-lg shadow-sm bg-white h-auto hover:border-amber-400 border-3">
        <h4 className="text-gray-900 mb-2 text-xl font-semibold">{title}</h4>
        <p className="text-gray-700 text-base">{description}</p>
        </div>
    </div>
  )
}