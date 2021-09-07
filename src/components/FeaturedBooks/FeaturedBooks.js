import React from "react";
import EffectivePython from "../../resources/effective python.png";
import BuildToLast from "../../resources/built to last.png";
import TheLeanStartUp from "../../resources/the lean startup.png";
import EffectiveEngineer from "../../resources/effective engineer.png";
import TheBigMagic from "../../resources/big magic.png";
import "./FeatureBooks.css";

function FeaturedBooks() {
  return (
    <div className="featured">
      <div className="featured__title">
        <h2>Featured Books</h2>
        <hr />
      </div>
      <div className="featured__books">
        <div
          className="carousel"
          data-flickity='{ "groupCells": true, "imagesLoaded": true }'
        >
          <div className="carousel-cell">
            <img src={EffectivePython} alt="Effective Python" />
          </div>
          <div className="carousel-cell">
            <img src={BuildToLast} alt="Effective Python" />
          </div>
          <div className="carousel-cell">
            <img src={TheLeanStartUp} alt="Effective Python" />
          </div>
          <div className="carousel-cell">
            <img src={TheBigMagic} alt="Effective Python" />
          </div>
          <div className="carousel-cell">
            <img src={EffectiveEngineer} alt="Effective Python" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedBooks;
