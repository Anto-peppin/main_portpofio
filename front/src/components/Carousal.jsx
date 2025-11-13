import React, { useState } from "react";

const Carousal = ({ data, position }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouse = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const width = target.offsetWidth;
    const height = target.offsetHeight;

    const rotateY = ((offsetX - width / 2) / (width / 2)) * 2;
    const rotateX = -((offsetY - height / 2) / (height / 2)) * 2;

    const threshold = 0.3;
    if (
      Math.abs(offsetX - width / 2) / (width / 2) > threshold ||
      Math.abs(offsetY - height / 2) / (height / 2) > threshold
    ) {
      setX(rotateX);
      setY(rotateY);
    } else {
      setX(0);
      setY(0);
    }
  };

  return (
    <div
      className="flex w-full transition-transform duration-500 ease-in-out gap-5 h-full"
      style={{
        transform: `translateX(-${position * (100 + 2.2)}%)`,
      }}
    >
      {data.map((val, ind) => (
        <div
          key={ind}
          onMouseMove={handleMouse}
          onMouseLeave={() => {
            setX(0);
            setY(0);
          }}
          className="w-full shrink-0 h-full rounded-xl"
          style={{
            transform: `perspective(600px) rotateX(${x}deg) rotateY(${y}deg)`,
            transition: "transform 0.2s linear",
          }}
        >
          <img
            src={val.img}
            alt={`Project ${ind}`}
            className="w-full h-full rounded-xl border border-white "
          />
        </div>
      ))}
    </div>
  );
};

export default Carousal;
