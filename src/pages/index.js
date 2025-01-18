import React from 'react';
import { Link } from 'gatsby';
import Navigation from '../components/navigation';
import Search from '../components/search';
import Interactive from '../components/interactive';
import Visualizations from '../components/visualizations';

const IndexPage = () => (
  <div>
    <header>
      <Navigation />
    </header>
    <main>
      <section>
        <h1>Welcome to the Universal Pattern Language</h1>
        <p>
          Explore our content:
          <ul>
            <li><Link to="/manifesto">Manifesto</Link></li>
            <li><Link to="/vision">Vision</Link></li>
            <li><Link to="/resources">Resources</Link></li>
          </ul>
        </p>
      </section>
      <section>
        <Search />
      </section>
      <section>
        <Interactive />
      </section>
      <section>
        <Visualizations />
      </section>
    </main>
    <footer>
      <button onClick={() => window.open('https://github.com/composable-delivery/Universal-Pattern-Language', '_blank')}>Star the Repository</button>
      <button onClick={() => window.open('https://github.com/composable-delivery/Universal-Pattern-Language/discussions', '_blank')}>Join Discussions</button>
      <button onClick={() => window.open('https://github.com/composable-delivery/Universal-Pattern-Language', '_blank')}>Contribute</button>
    </footer>
  </div>
);

export default IndexPage;
