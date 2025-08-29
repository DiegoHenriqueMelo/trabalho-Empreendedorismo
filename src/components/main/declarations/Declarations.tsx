import { useState } from "react";
import "./Declarations.css";

function Declarations() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const declarations = [
    {
      title: "Primeira Declaração",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatem veritatis, dicta aliquam velit blanditiis omnis quae consequatur expedita."
    },
    {
      title: "Segunda Declaração", 
      content: "Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      title: "Terceira Declaração",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam."
    }
  ];

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('right');

  const nextSlide = () => {
    setDirection('right');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % declarations.length);
      setIsTransitioning(false);
    }, 250);
  };

  const prevSlide = () => {
    setDirection('left');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + declarations.length) % declarations.length);
      setIsTransitioning(false);
    }, 250);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full">
        <div className="flex flex-col items-center text-center">
          {/* Content Section */}
          <div className="w-full">
            {/* Speech Bubble */}
            <div className={`relative bg-gray-200 rounded-2xl shadow-lg p-6 sm:p-8 mb-8 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto transform transition-all duration-500 ease-in-out ${
              isTransitioning ? (direction === 'right' ? 'translate-x-full opacity-0' : '-translate-x-full opacity-0') : 'translate-x-0 opacity-100'
            }`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                {declarations[currentSlide].title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600">
                {declarations[currentSlide].content}
              </p>
              {/* Speech bubble tail */}
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-gray-200 transform rotate-45 shadow-lg"></div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-gray-700 text-xl">‹</span>
              </button>
              
              {/* Dots Indicator */}
              <div className="flex gap-2">
                {declarations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-gray-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-gray-700 text-xl">›</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Declarations;
