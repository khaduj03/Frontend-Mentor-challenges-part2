import { useState } from "react";
import "./pricingcard.css";

export default function PricingCard() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleMouseDown = (e) => {
    // We need the container element (the slider track)
    const container = e.currentTarget.parentElement;
    if (!container) return;

    const moveThumb = (event) => {
      const rect = container.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      let newValue = (offsetX / rect.width) * 100;
      newValue = Math.max(0, Math.min(100, newValue));
      setSliderValue(newValue);
    };

    const stopMove = () => {
      document.removeEventListener("mousemove", moveThumb);
      document.removeEventListener("mouseup", stopMove);
    };

    document.addEventListener("mousemove", moveThumb);
    document.addEventListener("mouseup", stopMove);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      {/* Slider Container */}
      <div className="w-96 relative h-5 rounded-3xl">
        {/* Track with gradient (blue on left, gray on right) */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `linear-gradient(to right, #3b82f6 ${sliderValue}%, #d1d5db ${sliderValue}%)`,
          }}
        ></div>
        {/* Thumb */}
        <div
          className="absolute w-10 h-10 bg-black rounded-full flex justify-center items-center cursor-pointer"
          style={{
            left: `calc(${sliderValue}% - 20px)`, // half of thumb width (20px) for centering
            top: "-10px", // adjust vertical position as needed
          }}
          onMouseDown={handleMouseDown}
        >
          <span className="block w-8 h-8 bg-[url('/images/icon-slider.svg')] bg-no-repeat bg-center bg-contain"></span>
        </div>
      </div>
    </div>
  );
}
