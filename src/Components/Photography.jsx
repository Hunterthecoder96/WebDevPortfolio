import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bucks from "../assets/lovebuck.png";
import BowSeason from "../assets/patbowseason.png";
import Avon from "../assets/kinakeetgold.png";
import "../Styles/Photography.css";
import Empty from "../assets/Emptyperfection.png";
import LandingGeese from "../assets/landinggeese.png";
import Modal from "./Modal";
function Accordion({ items }) {
  const [active, setActive] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleToggle = (index) => setActive(index);
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  }

  const closeModal = ()=>setIsModalOpen(false)

  return (
    <section className="image-accordion">
      {items.map((item, index) => {
        const isActive = active === index ? "active" : "";
        return (
          <div
            key={item.image}
            className={`image-accordion-item ${isActive}`}
            onClick={() => handleToggle(index)}
          >
            <img src={item.image} alt={item.header} />
            <div className="content">
            
              <div>
                <h2>{item.header}</h2>
                <p>{item.text}</p>
                <button onClick={() => openModal(item.image)}>View Full Image</button>
              </div>
            </div>
          </div>
        );
      })}
       <Modal isOpen={isModalOpen} image={selectedImage} onClose={closeModal} />
    </section>
  );
}

const coolImages = [
  {
    header: "Deer Couple",
    image: Bucks,
    text: "In the depths of the dunes of Hatteras Island I stumbled upon a young male and female deer",
  },
  {
    header: "Bow Season",
    image: BowSeason,
    text: "Scenic photo of Bow Season in the field",
  },
  {
    header: "Avon Sound Side",
    image: Avon,
    text: "A beautiful night on the sound side in Avon, NC",
  },
  {
    header: "Winter Perfection",
    image: Empty,
    text: "A great day of surf on a chilly January day",
  },
  {
    header: "Geese Landing",
    image: LandingGeese,
    text: "After a long day these geese needed a good body of water to spend the night",
  },
];

export default function Photography() {
  return (
    <section className="page">
        <h2>What I enjoy in my free time</h2>
      <Accordion items={coolImages} />
    </section>
  );
}
