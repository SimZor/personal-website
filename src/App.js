import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <div className="container">
            <h4>
              Simon Arledal -&nbsp;
              <span style={{ fontWeight: '400' }}>
                Software Developer
              </span>
            </h4>
            <hr />
            <ul className="inline-list">
              <li>
                <a href="https://linkedin.com/in/simonarledal">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/SimZor">
                  Github
                </a>
              </li>
              <li>
                <a href="mailto:arledal.simon@gmail.com">
                  Email
                </a>
              </li>
              <li>
                <a href="https://twitter.com/SimZors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://s3.eu-central-1.amazonaws.com/simzor-public-content/pub_key.txt" target="_blank">
                  PGP Key
                </a>
              </li>
            </ul>
          </div>
        </header>
        <main>
          <div className="container">
            <h4>Blog posts</h4>
            <h4>Projects</h4>
          </div>
        </main>
        <footer>
          <div className="container">
            <small>Copyright (c) Simon Arledal 2018 || You can find the source of this site on my Github.</small>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
