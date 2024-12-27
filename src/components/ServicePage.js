import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ServicePage.css';

import image1 from '../Images/Lavish pre-wedding shoot/Lavish pre-wedding shoot_1.jpg';
import image2 from '../Images/Lavish pre-wedding shoot/Lavish pre-wedding shoot_2.jpg';
import image3 from '../Images/Lavish pre-wedding shoot/Lavish pre-wedding shoot_3.jpg';
import image4 from '../Images/Lavish pre-wedding shoot/Lavish pre-wedding shoot_4.jpg';
import image5 from '../Images/Lavish pre-wedding shoot/Lavish pre-wedding shoot_5.jpg';
import image6 from '../Images/Lavish pre-wedding shoot/Lavish pre-wedding shoot_6.jpg';
import image7 from '../Images/Lavish pre-wedding shoot/Lavish pre-wedding shoot_7.jpg';
import image8 from '../Images/Lavish pre-wedding shoot/Lavish pre-wedding shoot_8.jpg';
import image9 from '../Images/Lavish pre-wedding shoot/Lavish pre-wedding shoot_9.jpg';
import image10 from '../Images/Lavish pre-wedding shoot/Lavish pre-wedding shoot_10.jpg';

import image11 from '../Images/Beach Portraits/Beach Portraits_1.jpg';
import image12 from '../Images/Beach Portraits/Beach Portraits_2.jpg';
import image13 from '../Images/Beach Portraits/Beach Portraits_3.jpg';
import image14 from '../Images/Beach Portraits/Beach Portraits_4.jpg';
import image15 from '../Images/Beach Portraits/Beach Portraits_5.jpg';
import image16 from '../Images/Beach Portraits/Beach Portraits_6.jpg';
import image17 from '../Images/Beach Portraits/Beach Portraits_7.jpg';



import image18 from '../Images/Destination wedding/Destination wedding_1.jpg';
import image19 from '../Images/Destination wedding/Destination wedding_2.jpg';
import image20 from '../Images/Destination wedding/Destination wedding_3.jpg';
import image21 from '../Images/Destination wedding/Destination wedding_4.jpg';
import image22 from '../Images/Destination wedding/Destination wedding_5.jpg';
import image23 from '../Images/Destination wedding/Destination wedding_6.jpg';
import image24 from '../Images/Destination wedding/Destination wedding_7.jpg';
import image25 from '../Images/Destination wedding/Destination wedding_8.jpg';
import image26 from '../Images/Destination wedding/Destination wedding_9.jpg';
import image27 from '../Images/Destination wedding/Destination wedding_10.jpg';


import image28 from '../Images/Food photography/Food photography_1.jpg';
import image29 from '../Images/Food photography/Food photography_2.jpg';
import image30 from '../Images/Food photography/Food photography_3.jpg';
import image31 from '../Images/Food photography/Food photography_4.jpg';
import image32 from '../Images/Food photography/Food photography_5.jpg';
import image33 from '../Images/Food photography/Food photography_6.jpg';
import image34 from '../Images/Food photography/Food photography_7.jpg';
import image35 from '../Images/Food photography/Food photography_8.jpg';


import image36 from '../Images/Christian Wedding/Christian Wedding_1.jpg';
import image37 from '../Images/Christian Wedding/Christian Wedding_2.jpg';
import image38 from '../Images/Christian Wedding/Christian Wedding_3.jpg';
import image39 from '../Images/Christian Wedding/Christian Wedding_4.jpg';
import image40 from '../Images/Christian Wedding/Christian Wedding_5.jpg';
import image41 from '../Images/Christian Wedding/Christian Wedding_6.jpg';
import image42 from '../Images/Christian Wedding/Christian Wedding_7.jpg';
import image43 from '../Images/Christian Wedding/Christian Wedding_8.jpg';
import image44 from '../Images/Christian Wedding/Christian Wedding_9.jpg';
import image45 from '../Images/Christian Wedding/Christian Wedding_10.jpg';

import image46 from '../Images/Haldi/Haldi_1.jpg';
import image47 from '../Images/Haldi/Haldi_2.jpg';
import image48 from '../Images/Haldi/Haldi_3.jpg';
import image49 from '../Images/Haldi/Haldi_4.jpg';
import image50 from '../Images/Haldi/Haldi_5.jpg';
import image51 from '../Images/Haldi/Haldi_6.jpg';
import image52 from '../Images/Haldi/Haldi_7.jpg';
import image53 from '../Images/Haldi/Haldi_8.jpg';
import image54 from '../Images/Haldi/Haldi_9.jpg';

import image55 from '../Images/Creative urban Portraits/Creative urban Portraits_1.jpg';
import image56 from '../Images/Creative urban Portraits/Creative urban Portraits_2.jpg';
import image57 from '../Images/Creative urban Portraits/Creative urban Portraits_3.jpg';
import image58 from '../Images/Creative urban Portraits/Creative urban Portraits_4.jpg';
import image59 from '../Images/Creative urban Portraits/Creative urban Portraits_5.jpg';
import image60 from '../Images/Creative urban Portraits/Creative urban Portraits_6.jpg';
import image61 from '../Images/Creative urban Portraits/Creative urban Portraits_7.jpg';
import image62 from '../Images/Creative urban Portraits/Creative urban Portraits_8.jpg';
import image63 from '../Images/Creative urban Portraits/Creative urban Portraits_9.jpg';
import image64 from '../Images/Creative urban Portraits/Creative urban Portraits_10.jpg';

import image65 from '../Images/Sports car photography/Sports car photography_1.jpg';
import image66 from '../Images/Sports car photography/Sports car photography_2.jpg';
import image67 from '../Images/Sports car photography/Sports car photography_3.jpg';
import image68 from '../Images/Sports car photography/Sports car photography_4.jpg';
import image69 from '../Images/Sports car photography/Sports car photography_5.jpg';
import image70 from '../Images/Sports car photography/Sports car photography_6.jpg';




const serviceImages = {
  'pre-wedding': [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ],
  'beach-portraits_1': [
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    
  ],
  'destination-wedding': [
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27
  ],
  'food-photography': [
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
    image34,
    image35,
  ],
  'christian-wedding': [
    image36,
    image37,
    image38,
    image39,
    image40,
    image41,
    image42,
    image43,
    image44,
    image45,
  ],
  'haldi-shoot': [
    image46,
    image47,
    image48,
    image49,
    image50,
    image51,
    image52,
    image53,
    image54,   
  ],
  'urban-portraits': [
    image55,
    image56,
    image57,
    image58,
    image59,
    image60,
    image61,
    image62,
    image63,
    image64,
    
  ],
  'sports-car': [
  image65,
  image66,
  image67,
  image68,
  image69,
  image70,

  ],
};

function ServicePage() {
  const { serviceId } = useParams();
  const images = serviceImages[serviceId] || [];
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="service-page">
      <h1>{serviceId.replace('-', ' ')}</h1>
      <div className="masonry-gallery">
        {images.length > 0 ? (
          images.map((src, index) => (
            <div key={index} className="masonry-item" onClick={() => openModal(src)}>
              <img src={src} alt={`Service Image ${index + 1}`} />
            </div>
          ))
        ) : (
          <p>No images available for this service.</p>
        )}
      </div>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Enlarged View" />
        </div>
      )}

      <section className="booking-section">
        <h2>Book This Service</h2>
        <form action="/submit-booking" method="POST">
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required placeholder="Enter your full name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label htmlFor="details">Additional Details:</label>
            <textarea id="details" name="details" rows="4" placeholder="Any additional information or requests?" />
          </div>
          <button type="submit">Book Now</button>
        </form>
      </section>
    </div>
  );
}

export default ServicePage;