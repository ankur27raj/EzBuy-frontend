import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Banner from "../../images/banner1.png";
import styles from "../../../styles/styles";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      backgroundImage: "url(https://img.freepik.com/free-photo/levitating-product-display-with-headphones_23-2149670637.jpg?w=996&t=st=1688978721~exp=1688979321~hmac=5044230b4348c1f56d80361e487db1c5a98efebe46b261910a1544dc1d2a7c99)",
      title: "Explore The Music",
      description: "Experience music like never before with the Pokemon Pro Music Headphones. Designed to deliver unparalleled sound quality and comfort, these headphones are the ultimate companion for music enthusiasts and audiophiles alike.",
    },
    {
      backgroundImage: `url(${Banner})`,
      title: "",
      description: "",
    },
    {
      backgroundImage: "url(https://img.freepik.com/free-photo/electronic-devices-balancing-concept_23-2150422326.jpg?w=826&t=st=1688978304~exp=1688978904~hmac=dab89cd6f4d10d8d268a79eec4234bdbe2a108b025950e702a9c2b47002f7c99)",
      title: "Crazy Deals",
      description: "starting ₹6999",
    },
  ];

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-cover bg-center flex items-center ${styles.normalFlex}`}
      style={{
        backgroundImage: slides[activeIndex].backgroundImage,
        transition: "background-image 0.5s ease",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%] text-center text-white`}>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          {slides[activeIndex].title}
        </h1>
        <p className="text-lg md:text-xl mb-10">
          {slides[activeIndex].description}
        </p>
        <Link to="/products" className="inline-block">
          <button
            className="py-3 px-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-lg shadow-lg"
            style={{
              background: "linear-gradient(to right, #7f00ff, #e100ff)",
            }}
          >
            Shop Now
          </button>
        </Link>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === activeIndex ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => handleSlideChange(index)}
            ></div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-lg transition duration-300"
        onClick={handlePrevSlide}
      >
        <FiChevronLeft size={24} />
      </button>

      <button
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-lg transition duration-300"
        onClick={handleNextSlide}
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};

export default Hero;

