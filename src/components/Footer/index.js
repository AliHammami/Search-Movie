/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components

// Styles
import './footer.scss';

/**
 * Code
 */
const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer id="footer">
      <p>Passion Movies, le 7ème art pour tous © {year}</p>
    </footer>
  );
};

/**
 * Export
 */
export default Footer;
