import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Serie from "../types/serie";
import { Link } from "react-router-dom";

interface SerieCarouselProps {
  series: Serie[];
}

const SerieCarousel: React.FC<SerieCarouselProps> = ({ series }) => {
  const serieGap = 20;

  // Divise les séries en groupes de 6
  const chunkedSeries = [];
  for (let i = 0; i < series.length; i += 6) {
    chunkedSeries.push(series.slice(i, i + 6));
  }

  return (
    <div id="seriesCarousel">
      <Carousel showThumbs={false} showStatus={false} dynamicHeight={false} infiniteLoop={true}>
        {chunkedSeries.map((serieGroup, groupIndex) => (
          <div key={groupIndex} className="seriesHome__carouselSlide">
            {serieGroup.map((serie, serieIndex) => (
              <div
                key={serie.id}
                className="seriesHome__item"
                style={{
                  marginRight: serieIndex < serieGroup.length - 1 ? `${serieGap}px` : "0",
                }}
              >
                <img className="seriesHome__poster" src={serie.poster} alt="poster" />
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
