import React, { useState } from "react";
import "./RvDetailsHero.css";
import { RvImages } from "../../../../Constants/Data";
import RvHeroImage from '../../../Svg/RvDetails-bg.svg'

function RvDetailsHero() {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };
  return (
    <div className="RvDetailsHero-container">
      <div className="bgImageContainer">
        <img className="bgImage" src={RvHeroImage} alt='RvImage' />
      </div>
      <div className="RvDetails-h1">Holiday Rambler - Invicta 32RW</div>
      <div className="RvMedia-container">
        <div className="image-gallery">
          <div className="thumbnails">
            {RvImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`thumbnail ${index === selectedImage ? "selected" : "unSelected"
                  }`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
          <div className="selected-image">
            <img
              src={RvImages[selectedImage]}
              alt={`Selected`}
              className="selectedImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RvDetailsHero;
