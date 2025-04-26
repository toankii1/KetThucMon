import React, { useState } from 'react';
import bannerImage1 from '../banner/1.png'; // Đường dẫn đến ảnh 1
import bannerImage2 from '../banner/2.png'; // Đường dẫn đến ảnh 2
import bannerImage3 from '../banner/3.png'; // Đường dẫn đến ảnh 3
import './Banner.css'; 

function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [bannerImage1, bannerImage2, bannerImage3]; // Mảng chứa tất cả các ảnh
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="banner-container">
      <img src={images[currentImageIndex]} alt="Banner" className="banner-image" />
      <div className="banner-controls">
        <button onClick={prevImage}>Trước</button>
        <button onClick={nextImage}>Tiếp</button>
      </div>
    </div>
  );
}

export default Banner;