import FeaturedOne from "../assets/images/f2.jpg";
import FeaturedTwo from "../assets/images/Gh 1.jpg";
import FeaturedThree from "../assets/images/Esther full 3.jpg";
import FeaturedFour from "../assets/images/maria headshot 3.jpg";
import FeaturedFive from "../assets/images/f1.jpg";
import FeaturedSix from "../assets/images/Esther headshot 3.jpg";

import Featured1 from "../assets/images/mili3.jpg";
import Featured2 from "../assets/images/mili2.jpg";
import Featured3 from "../assets/images/mili1.jpg";
import Featured4 from "../assets/images/R1.jpg";
import Featured5 from "../assets/images/R3.jpg";
import Featured6 from "../assets/images/R4.jpg";

interface FeaturedItem {
  name: string;
  image: string;
}

export const ladiesCollection: FeaturedItem[] = [
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

interface Props {
  name: string;
  image: string;
}

export const BlackXwhiteCollection: Props[] = [
  {
    name: "Lucid Dreams",
    image: Featured1,
  },
  {
    name: "Stepper Girl",
    image: Featured5,
  },
  {
    name: "Magnificient",
    image: Featured2,
  },
  {
    name: "Gram Attire",
    image: Featured6,
  },
  {
    name: "Stepper Girl",
    image: Featured3,
  },
  {
    name: "Gram Attire",
    image: Featured4,
  },
];
