import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Serie from "../types/serie";
import { Link } from "react-router-dom";

interface SerieCarouselProps {
  series: Serie[];
}

const SerieCarousel: React.FC<SerieCarouselProps> = ({ series }) => {
  const minGap = 20;
  const minItemWidth = 250; //en px

  const calculateItemsAndGap = () => {
    const maxItemsPerSlide = series.length; 
    const gap = minGap;
    const itemWidth = minItemWidth; 

    return {
      itemsPerSlide: maxItemsPerSlide,
      gap,
      itemWidth,
    };
  };

  const [itemsAndGap, setItemsAndGap] = useState(calculateItemsAndGap());

  useEffect(() => {
    const handleResize = () => {
      setItemsAndGap(calculateItemsAndGap());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { itemsPerSlide, gap, itemWidth } = itemsAndGap;

  const chunkedSeries = [];
  for (let i = 0; i < series.length; i += itemsPerSlide) {
    chunkedSeries.push(series.slice(i, i + itemsPerSlide));
  }

  return (
    <div id="seriesCarousel">
      <Carousel
        showThumbs={true}
        showStatus={true}
        dynamicHeight={false}
        infiniteLoop={true}
        showIndicators={false}
      >
        {chunkedSeries.map((serieGroup, groupIndex) => (
          <div key={groupIndex} className="seriesHome__carouselSlide">
            {serieGroup.map((serie, serieIndex) => (
              <div
                key={serie.id}
                className="seriesHome__item"
                style={{
                  width: `${itemWidth}px`,
                  marginRight:
                    serieIndex < serieGroup.length - 1 ? `${gap}px` : "0",
                }}
              >
                <img
                  className="seriesHome__poster"
                  src={serie.poster}
                  alt="poster"
                />
                <Link to={`/serie/${serie.id}`}>
                  <div className="seriesHome__itemDetails">
                    <h2 className="seriesHome__title">{serie.title}</h2>
                    <h3 className="seriesHome__duration">{serie.duration}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SerieCarousel;
