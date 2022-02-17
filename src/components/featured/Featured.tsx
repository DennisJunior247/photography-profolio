import "./Featured.scss";

import TitleBlock from "../titleBlock/TitleBlock";

import FeaturedOne from "../../assets/images/f2.jpg";
import FeaturedTwo from "../../assets/images/Gh 1.jpg";
import FeaturedThree from "../../assets/images/Esther full 3.jpg";
import FeaturedFour from "../../assets/images/maria headshot 3.jpg";
import FeaturedFive from "../../assets/images/f1.jpg";
import FeaturedSix from "../../assets/images/Esther headshot 3.jpg";

interface FeaturedItem {
  name: string;
  image: string;
}

const Featured = () => {
  const ladiesWear: FeaturedItem[] = [
    {
      name: "Lucid Dreams",
      image: FeaturedOne,
    },
    {
      name: "Magnificient",
      image: FeaturedTwo,
    },
    {
      name: "Stepper Girl",
      image: FeaturedThree,
    },
    {
      name: "Gram Attire",
      image: FeaturedFour,
    },
    {
      name: "Stepper Girl",
      image: FeaturedFive,
    },
    {
      name: "Gram Attire",
      image: FeaturedSix,
    },
  ];

  return (
    <div className="featured">
      <TitleBlock subtitle="Featured" title="Ladies Summer Collection" />
      <div className="featured__grid">
        {ladiesWear.map((item, index) => (
          <div
            key={item.name + index}
            className="featured__item featured__item--one"
            style={{ backgroundImage: `url('${item.image}')` }}
          >
            <p className="featured__item-label">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="featured__cta">
        {/* <div className="btn">View All</div> */}
      </div>
    </div>
  );
};

export default Featured;
