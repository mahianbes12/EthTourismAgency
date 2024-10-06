import React, {useState} from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import axum from "../assets/axum-ethiopia1.jpg";
import ertale from "../assets/ertale1.jpg";
import lalibela from "../assets/lalibela1.jpg";
import fasiledes from "../assets/fasiledes1.png";
import chiladas from "../assets/chiladas1.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [axum, ertale, lalibela, fasiledes, chiladas];

function Home() {
    console.log('Home component rendered');

    const NextArrow = ({ onClick })=> {
      return (
        <div className="arrow next" onClick={onClick}>
          <FaArrowRight />
        </div>
      );
    };

    const PrevArrow = ({ onClick }) => {
      return (
        <div className="arrow prev" onClick={onClick}>
          <FaArrowLeft />
        </div>
      );
    };
    
    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
      Infinity: true,
      // lazyLoad: true,
      speed: 300,
      slidesToShow: 5,
      centerMode: true,
      centerPadding: 0,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImageIndex(next),
      draggable: true,
      swipeToSlide: true,
    };

    const getSlideClass = (idx) => {
      const left1 = (imageIndex - 1 + images.length) % images.length;
      const left2 = (imageIndex - 2 + images.length) % images.length;
      const right1 = (imageIndex + 1) % images.length;
      const right2 = (imageIndex + 2) % images.length;

      if (idx === imageIndex) {
          return "slide activeSlide";
      } else if (idx === left1 || idx === right1) {
          return "slide nearActiveSlide";
      } else if (idx === left2 || idx === right2) {
          return "slide farSlide";
      } else {
          return "slide hiddenSlide";
      }
  };

  return (
    <div className="home">
      <div className="home-content">
        <h1>Explore Ethiopia</h1>
        <p>
        Discover ancient history, stunning landscapes, and vibrant culture. 
        From the rock-hewn churches of Lalibela to the majestic peaks of the Simien Mountains, 
        Ethiopia invites you to explore its wonders. Experience the  birthplace of coffee, the cradle of humanity,
         and festivals that bring tradition to life. Let this ancient land inspire and captivate you.
        </p>
        <Link to="/about"><button>Learn More</button></Link>
        <div className="slider-container">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div className={getSlideClass(idx)} key={idx}>
                <img src={img} alt={`Slide-${idx}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="home-images">
      </div>
    </div>
  );
}

export default Home;
