import React from "react";
import "./Hero.scss";
import { ReactComponent as Arrow } from "../../assets/svgs/scroll-arrow.svg";
import { ReactComponent as Crosses } from "../../assets/svgs/crosses.svg";
import Model from "../../assets/images/nnanna.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__section hero__section--text">
        <h1 className="hero__title">PHOTOGRAPHY REDEFINED.</h1>
        <h2 className="hero__subtitle">
          CAPTURING MOMENTS, <br /> WITH OUR LENS <br />
        </h2>
        <Crosses className="hero__crosses" />
      </div>

      <div className="hero__section hero__section--model">
        <img src={Model} alt="klosette model" className="hero__model" />
      </div>

      <div className="hero__scroll">
        <p className="hero__scroll-text">Scroll for more details</p>
        <Arrow className="hero__scroll-icon" />
      </div>
    </section>
  );
};

export default Hero;
