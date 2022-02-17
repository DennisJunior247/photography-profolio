import "./Slideshow.scss";

import TitleBlock from "../titleBlock/TitleBlock";

import SlideOne from "../../assets/images/s2.jpg";
import SlideTwo from "../../assets/images/N3.jpg";
import SlideThree from "../../assets/images/o7.jpg";
import SlideFour from "../../assets/images/Chi 6.jpg";
import SlideFive from "../../assets/images/Darkside 1.jpg";
import SlideSix from "../../assets/images/R4.jpg";
import SlideSeven from "../../assets/images/T3.jpg";

interface Slide {
  name: string;
  image: string;
}

const Slideshow = () => {
  const remixCollection: Slide[] = [
    {
      name: "Dagbana",
      image: SlideOne,
    },
    {
      name: "English",
      image: SlideTwo,
    },
    {
      name: "Hoodie",
      image: SlideThree,
    },
    {
      name: "Lost Boys",
      image: SlideFour,
    },
    {
      name: "Classic",
      image: SlideFive,
    },
    {
      name: "Retro",
      image: SlideSix,
    },
    {
      name: "Beach",
      image: SlideSeven,
    },
  ];

  return (
    <div className="slideshow">
      <TitleBlock subtitle="Featured" title="The Remix Collection" />
      <div className="slideshow__slider">
        {remixCollection.map((item, index) => (
          <div
            key={item.name + index}
            className="slideshow__item"
            style={{ backgroundImage: `url('${item.image}')` }}
          >
            {/* <p className="slideshow__item-label">{item.name}</p> */}
          </div>
        ))}
      </div>
      <div className="slideshow__cta"></div>
    </div>
  );
};

export default Slideshow;
