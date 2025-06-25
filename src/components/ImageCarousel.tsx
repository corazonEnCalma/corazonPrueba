import React, { useState } from 'react';

interface ImageCarouselProps {
  images: string[];
  altPrefix?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, altPrefix = 'Imagen' }) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const goTo = (idx: number) => setCurrent((idx + total) % total);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  return (
    <div className="relative w-full max-w-5xl mx-auto mb-10">
      <div className="overflow-hidden rounded-xl shadow-lg">
        <img
          src={images[current]}
          alt={`${altPrefix} ${current + 1}`}
          className="w-full h-56 md:h-96 object-cover object-center transition-all duration-500"
        />
      </div>
      {/* Flechas */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-corazon text-corazon hover:text-white rounded-full p-2 shadow transition-colors"
        aria-label="Anterior"
        style={{ zIndex: 2 }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-corazon text-corazon hover:text-white rounded-full p-2 shadow transition-colors"
        aria-label="Siguiente"
        style={{ zIndex: 2 }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
      </button>
      {/* Puntitos */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-full border-2 border-corazon-shadow focus:outline-none transition-all ${current === idx ? 'bg-corazon-shadow' : 'bg-corazon/40'}`}
            aria-label={`Ir a la imagen ${idx + 1}`}
            style={{ boxShadow: current === idx ? '0 0 0 2px #C17667' : undefined }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel; 