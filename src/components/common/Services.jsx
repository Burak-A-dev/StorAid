// ChatGPT användes för att stukturera koden så att det blir tydligare.

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div>
        <div className="flex justify-start gap-6">
          
          <div className="w-1/2">
            <h4 className="text-amber-500 text-lg font-bold text-base">Our Services</h4>
            <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Specialized Storage for Every Special Item
            </h2>
          </div>

          <div className="w-1/2 pt-12">
            <p className="text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center gap-6 mt-16">

          <div className="flex flex-col gap-6 w-[300px]"> 

            <div className="flex flex-col items-start justify-center p-6 border-2 border-amber-400 rounded-lg shadow-sm bg-white h-auto">
              <h4 className="text-gray-900 mb-2 text-xl font-semibold">Diverse Unit Sizes</h4>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            <div className="flex flex-col items-start justify-center p-6 border border-gray-200 rounded-lg shadow-sm bg-white h-auto">
              <h4 className="text-gray-900 mb-2 text-xl font-semibold">Moving Assistance</h4>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

          </div>

          <div className="bg-gray-300 rounded-lg w-[480px]"></div>

          <div className="flex flex-col gap-6 w-[300px]">

            <div className="flex flex-col items-start justify-center p-6 border border-gray-200 rounded-lg shadow-sm bg-white h-auto">
              <h4 className="text-gray-900 mb-2 text-xl font-semibold">Vehicle Storage</h4>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            <div className="flex flex-col items-start justify-center p-6 border border-gray-200 rounded-lg shadow-sm bg-white h-auto">
              <h4 className="text-gray-900 mb-2 text-xl font-semibold">Top-Notch Security</h4>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}