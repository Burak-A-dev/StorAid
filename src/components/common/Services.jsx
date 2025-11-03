export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col items-center">
        {/* Top Section */}
        <div className="w-full max-w-[1080px]">
          <h4 className="text-amber-500 font-semibold mb-2 text-base">Our Services</h4>

          {/* Side by side h2 and p */}
          <div className="flex flex-row gap-8 mt-2">
            <h2 className="w-1/2 text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Specialized Storage for Every Special Item
            </h2>
            <p className="w-1/2 text-gray-700 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
            </p>
          </div>
        </div>

        <div className="mt-10" />

        {/* Cards Section */}
        <div className="flex items-start justify-center gap-8 w-full max-w-[1080px]">
          <div className="flex flex-col gap-6 w-[320px] h-[360px]">
            <div className="flex flex-col p-5 border-2 border-amber-400 rounded-lg shadow-sm bg-white h-[168px]">
              <h4 className="text-gray-900 mb-2 text-xl font-semibold">Diverse Unit Sizes</h4>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            <div className="flex flex-col p-5 border border-gray-200 rounded-lg shadow-sm bg-white h-[168px]">
              <h4 className="text-gray-900 mb-2 text-xl font-semibold">Moving Assistance</h4>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>

          <div className="bg-gray-300 rounded-lg w-[440px] h-[360px]" />

          <div className="flex flex-col gap-6 w-[320px] h-[360px]">
            <div className="flex flex-col p-5 border border-gray-200 rounded-lg shadow-sm bg-white h-[168px]">
              <h4 className="text-gray-900 mb-2 text-xl font-semibold">Vehicle Storage</h4>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            <div className="flex flex-col p-5 border border-gray-200 rounded-lg shadow-sm bg-white h-[168px]">
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
