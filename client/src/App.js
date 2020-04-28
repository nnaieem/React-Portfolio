import React from 'react';
import './assets/css/style.css'
import Pic from './assets/images/faceshot.jpg'

function App() {
  return (
    <div className="App">

        <header id="masthead">
          <div className="container">
            <a href="index.html" id="logo">Nicholas N</a>
            <nav>
              <a href="index.html">About</a>
              <a href="portfolio.html">Portfolio</a>
              <a href="contact.html">Contact</a>
            </nav>
          </div>
        </header>

        <div id="main-container" className="container">
          <section className="main-section">
            <h1>About Me</h1>

            <img src={Pic} className="auth-image" alt="Your Name"/>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum luctus felis, ac rhoncus nunc porttitor condimentum. Mauris sit amet dolor eu elit varius varius facilisis id arcu. Proin vel dui massa. Nunc rhoncus fringilla pharetra. Vestibulum bibendum consectetur euismod. Proin commodo purus vitae sollicitudin consectetur.</p>

            <p>Donec vehicula lacus at leo feugiat lacinia. In et ex ultrices, ultrices neque non, pretium odio. Nunc id eros iaculis, pulvinar quam eget, egestas mauris.</p>

            <p>Suspendisse dictum, arcu at convallis faucibus, quam sapien tincidunt nunc, sit amet egestas nibh tortor et mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

          </section>

        </div>

        <footer>
          <div className="container">
            Copyright &copy; 
          </div>
        </footer>

    </div>
  );
}

export default App;
