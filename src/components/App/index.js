/**
 * NPM import
 */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

/**
 * Local import
 */
// Components
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Search from 'src/components/Search';
import MovieDetails from 'src/components/MovieDetails';

// Styles
import './app.scss';

/**
 * Code
 */
const App = () => (
  <BrowserRouter>
    <div id="app">
      <Header />
      <Route exact path="/" component={Search} />
      <Route exact path="/movie/:id" component={MovieDetails} />
      <Footer />
    </div>
  </BrowserRouter>
);

/**
 * Export
 */
export default App;
