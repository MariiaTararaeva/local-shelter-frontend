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
        {media.length > 0 ? (
          media.map((item, index) => (
            <div key={index} className="carousel-slide">
              {item.type === "image" ? (
                <img
                  className="carousel-image"
                  src={item.url}
                  alt={`Media ${index + 1}`}
                />
              ) : item.type === "video" ? (
                <video className="carousel-video" controls src={item.url} />
              ) : (
                <div className="carousel-fallback">
                  <img src={logo} alt="Default Logo" />
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="carousel-slide">
            <div className="carousel-fallback">
              <img src={logo} alt="Default Logo" />
            </div>
          </div>
        )}
      </Slider>

      <div className="dots">
        <span className="dot" data-slide="0"></span>
        <span className="dot" data-slide="1"></span>
        <span className="dot" data-slide="2"></span>
      </div>
    </div>
  );
};

export default MediaCarousel;
