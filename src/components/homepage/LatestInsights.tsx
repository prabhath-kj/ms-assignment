import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import { insights } from '@/static'; // Assuming insights data is imported from a static file

const LatestInsights = () => {


  return (
    <div className="px-4 mt-8 md:px-6 lg:px-12 xl:px-22 2xl:px-44">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-black">Latest Insights</h2>
        <div className="flex gap-2">
          <button
            className="bg-white p-3 rounded-full shadow-md hover:bg-gray-200"
          >
            <FiChevronLeft size={24} className="text-black" />
          </button>
          <button
            className="bg-white p-3 rounded-full shadow-md hover:bg-gray-200"
          >
            <FiChevronRight size={24} className="text-black" />
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Flex layout for small screens, grid for medium and above */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-hidden scroll-smooth snap-x snap-mandatory">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="relative min-w-[80vw] sm:min-w-[45vw] md:min-w-0 bg-gray-100 shadow-lg rounded-lg overflow-hidden snap-start"
            >
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src={insight.imgSrc}
                  alt={insight.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              {/* Overlay content */}
              <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
                <span className="text-sm text-gray-300">{insight.date}</span>
                <h3 className="mt-2 font-semibold text-white text-lg">{insight.title}</h3>
                <a href="#" className="mt-4">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestInsights;
