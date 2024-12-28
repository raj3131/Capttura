import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>&copy; 2024 <span className="highlight">Capturra Studio</span>. All rights reserved.</p>
        <div className="social-links">
        <a href="https://www.instagram.com/capturra_.in/profilecard/?igsh=dzRqMHN4cXF2eGs2" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-instagram"></i> Instagram
</a>
<a href="tel:+91 7774970098">
  <i className="fas fa-phone"></i> +91 7774970098
</a>
<a href="https://www.facebook.com/share/18QbkNrKWw/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-facebook-f"></i> Facebook
</a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
