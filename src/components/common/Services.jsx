// ChatGPT användes för att stukturera koden så att det blir tydligare.

export default function Services() {
  return (
    <div>
      {/* ===== Top Section ===== */}
      <div className="">
        <h4 className=""></h4>
        <div className="">
          <h2 className="">Specialized Storage for Every Special Item</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
          </p>
        </div>
      </div>

      {/* ===== Bottom Section ===== */}
      <div className="flex flex-row items-center justify-center gap-4 mt-8">

        {/* --- Left Card Group --- */}
        <div className="">
          <div className="flex flex-col h-auto gap-4 border-2 p-2">

            <div className="flex flex-col items-start justify-center w-90 h-30 border-3 border-gray-200 rounded-md p-3">
              <h4 className="text-green-950 mb-2 text-lg font-semibold">Diverse Unit Sizes</h4>
              <p className="text-green-950 text-base/4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.
              </p>
            </div>

            <div className="flex flex-col items-start justify-center w-90 h-30 border-3 border-amber-400 rounded-md p-3">
              <h4 className="text-green-950 mb-2 text-lg font-semibold">Moving Assistance</h4>
              <p className="text-green-950 text-base/4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.
              </p>
            </div>

          </div>
        </div>

        {/* --- Center Image / Placeholder --- */}
        <div className="bg-gray-300 w-120 h-80 border-4 border-gray-100"></div>

        {/* --- Right Card Group --- */}
        <div className="border-2 flex flex-col h-auto p-2">
          <div className="flex flex-col gap-4">

            <div className="flex flex-col items-start justify-center w-90 h-30 border-3 border-gray-200 rounded-md p-3">
              <h4 className="text-green-950 mb-2 text-lg font-semibold">Vehicle Storage</h4>
              <p className="text-green-950 text-base/4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.
              </p>
            </div>

            <div className="flex flex-col items-start justify-center w-90 h-30 border-3 border-amber-400 rounded-md p-3">
              <h4 className="text-green-950 mb-2 text-lg font-semibold">Top-Notch Security</h4>
              <p className="text-green-950 text-base/4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
