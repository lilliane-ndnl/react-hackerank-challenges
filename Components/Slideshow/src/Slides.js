import React, { useState } from 'react';

function Slides({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  const restartSlides = () => {
    setCurrentSlide(0);
  };
  
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === slides.length - 1;
  
  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="bg-gray-800 p-4 mb-6 flex items-center justify-center">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-black flex items-center justify-center mr-2">
            <span className="text-white font-bold">H</span>
            <span className="h-full w-2 bg-green-500"></span>
          </div>
          <h1 className="text-green-500 text-xl font-medium">Slideshow App</h1>
        </div>
      </div>
      
      <div className="mb-4 flex justify-center space-x-4">
        <button 
          onClick={restartSlides} 
          disabled={isFirstSlide}
          className={`px-4 py-2 rounded ${isFirstSlide ? 'bg-green-100' : 'bg-green-200 hover:bg-green-300'}`}
          data-testid="button-restart"
        >
          Restart
        </button>
        <button 
          onClick={prevSlide} 
          disabled={isFirstSlide}
          className={`px-4 py-2 rounded ${isFirstSlide ? 'bg-green-100' : 'bg-green-200 hover:bg-green-300'}`}
          data-testid="button-prev"
        >
          Prev
        </button>
        <button 
          onClick={nextSlide} 
          disabled={isLastSlide}
          className={`px-4 py-2 rounded ${isLastSlide ? 'bg-green-100' : 'bg-green-300 hover:bg-green-400'}`}
          data-testid="button-next"
        >
          Next
        </button>
      </div>
      
      <div className="border rounded-lg p-8 bg-white shadow-md" data-testid="slide">
        <h2 className="text-3xl font-bold mb-4 text-center" data-testid="title">
          {slides[currentSlide].title}
        </h2>
        <p className="text-center" data-testid="text">
          {slides[currentSlide].text}
        </p>
      </div>
    </div>
  );
}

export default Slides;
