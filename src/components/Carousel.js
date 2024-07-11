import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 1000,
}) {
  const [curr, setCurr] = useState(0)

  const prev = useCallback(() => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  }, [slides.length])

  const next = useCallback(() => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  }, [slides.length])

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide, autoSlideInterval, next])

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          aria-label="Previous Slide"
          className="p-1 rounded-full shadow text-gray-800/[.1] hover:bg-white/40"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          aria-label="Next Slide"
          className="p-1 rounded-full shadow text-gray-800/[.1] hover:bg-white/40"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-1 h-1 bg-white rounded-full ${curr === i ? "p-1 md:p-2" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
