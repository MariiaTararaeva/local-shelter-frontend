import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MediaCarousel = ({ media, logo }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {media.map((item, index) => (
          <div key={index} className="carousel-slide">
            {item.type === "image" ? (
              <img
                className="carousel-image"
                src={item.url}
                alt={`Media ${index + 1}`}
              />
            ) : item.type === "video" ? (
              <video
                className="carousel-video"
                controls
                src={item.url}
                alt={`Video ${index + 1}`}
              />
            ) : (
              <div className="carousel-fallback">
                <img src={logo} alt="Default Logo" />
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MediaCarousel;
