import dynamic from 'next/dynamic';
import ContentItem from '../ContentItem/ContentItem';
import { getYear } from '../../../utils/formatUtils';
import {useEffect, useState} from "react";

function Carousel({ content, mediaType }) {
  const [isServer, setServerState] = useState(true);
  const Slider = dynamic(import('react-slick'), {ssr: isServer});
  useEffect(() => setServerState(false), []);

  const settings = {
    dots: false,
    infinite: true,
      slidesToShow: 7,
    slidesToScroll: 3,
    speed: 500,
    autoplay: false,
    touchThreshold: 15,

    responsive: [
        {
            breakpoint: 1245,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1090,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 920,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                infinite: false,
                slidesToShow: 5,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 700,
            settings: {
                arrows: false,
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                arrows: false,
                infinite: false,
            },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {content.map((elem) => (
        <ContentItem
          key={elem.id}
          id={elem.id}
          clientName={elem.title}
          releaseDate={getYear(elem.releaseDate)}
          mediaType={mediaType}
          clientUrl={`https://image.tmdb.org/t/p/w300/${elem.imageUrl}`}
        />
      ))}
    </Slider>
  );
}

export default Carousel;
