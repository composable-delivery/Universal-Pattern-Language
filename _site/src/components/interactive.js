import React, { useEffect, useState } from 'react';

const Interactive = () => {
  const [discussions, setDiscussions] = useState([]);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // Fetch discussions from the repository
    fetch('https://api.github.com/repos/composable-delivery/Universal-Pattern-Language/discussions')
      .then(response => response.json())
      .then(data => setDiscussions(data));

    // Fetch issues from the repository
    fetch('https://api.github.com/repos/composable-delivery/Universal-Pattern-Language/issues')
      .then(response => response.json())
      .then(data => setIssues(data));
  }, []);

  return (
    <div>
      <section id="discussions">
        <h2>Discussions</h2>
        <ul>
          {discussions.map(discussion => (
            <li key={discussion.id}>
              <a href={discussion.html_url} target="_blank" rel="noopener noreferrer">
                {discussion.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section id="issues">
        <h2>Issues</h2>
        <ul>
          {issues.map(issue => (
            <li key={issue.id}>
              <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
                {issue.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Interactive;
