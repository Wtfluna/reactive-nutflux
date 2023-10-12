import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Serie from "../types/serie";
import { Link } from "react-router-dom";

interface SerieCarouselProps {
  series: Serie[];
}

const SerieCarousel: React.FC<SerieCarouselProps> = ({ series }) => {
  const minGap = 10;
  const minItemWidth = 250; //largeur min en px

  //calcule le nbr dse séries par slide, l'espace et la largeur des éléments en fonction de la largeur de l'écran
  const calculateItemsAndGap = () => {
    const windowWidth = window.innerWidth;
    const maxItemsPerSlide = Math.floor(windowWidth / (minItemWidth + minGap));
    const gap =
      (windowWidth - maxItemsPerSlide * minItemWidth) / (maxItemsPerSlide - 1);
    const itemWidth = Math.max(
      minItemWidth,
      (windowWidth - gap * (maxItemsPerSlide - 1)) / maxItemsPerSlide
    );
    return {
      itemsPerSlide: Math.min(maxItemsPerSlide, maxItemsPerSlide), //limit the number of items per slide
      gap: Math.max(minGap, gap),
      itemWidth,
    };
  };

  const [itemsAndGap, setItemsAndGap] = useState(calculateItemsAndGap());

  //ajuste le nbr d'éléments par slide, l'espace et la largeur des éléments en fonction de la largeur de l'écran
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

  //divise les séries en groupes(nbr de slides)
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
