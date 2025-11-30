
import React, { useState, useEffect, useCallback } from 'react';
import { Slide01, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07, Slide08, Slide09, Slide10, Slide11, Slide12, Slide13, Slide14, Slide15, Slide16 } from './slides';

const slides: React.FC[] = [
  Slide01, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07, Slide08, Slide09, Slide10, Slide11, Slide12, Slide13, Slide14, Slide15, Slide16
];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <main className="relative w-full h-screen flex flex-col items-center justify-center bg-gray-50 overflow-hidden p-4">
      <div className="aspect-video w-full max-w-6xl bg-white shadow-2xl rounded-lg overflow-hidden transition-all duration-500">
        <CurrentSlideComponent />
      </div>
      
      {/* Navigation Controls */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center space-x-4 z-10">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="px-4 py-2 bg-white rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-opacity text-slate-700 hover:bg-slate-100"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <span className="text-slate-600 font-medium text-lg">
          {currentSlide + 1} / {slides.length}
        </span>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="px-4 py-2 bg-white rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-opacity text-slate-700 hover:bg-slate-100"
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>

       {/* Progress Bar */}
       <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-200">
        <div 
          className="h-1.5 bg-blue-500 transition-all duration-300 ease-in-out" 
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>
    </main>
  );
};

export default App;
