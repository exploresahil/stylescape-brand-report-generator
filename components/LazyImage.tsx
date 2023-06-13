"use client";

import Image from "next/image";
import { useState } from "react";

interface LazyImageProps {
  url: string;
  smallUrl: string;
}

const LazyImage = ({ url, smallUrl }: LazyImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="image-container">
      {!imageLoaded && (
        <Image
          fill
          src={smallUrl}
          style={{ objectFit: "cover" }}
          alt="Abstarct background image"
          onLoad={handleImageLoad}
          className="lazy-blur-image"
          loading="lazy"
        />
      )}
      {imageLoaded && (
        <Image
          fill
          src={url}
          style={{ objectFit: "cover" }}
          alt="Abstarct background image"
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyImage;
