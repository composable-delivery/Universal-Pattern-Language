import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/manifesto">Manifesto</Link></li>
      <li><Link to="/vision">Vision</Link></li>
      <li><Link to="/resources">Resources</Link></li>
      <li><Link to="/discussions">Discussions</Link></li>
      <li><Link to="/issues">Issues</Link></li>
    </ul>
  </nav>
);

export default Navigation;
