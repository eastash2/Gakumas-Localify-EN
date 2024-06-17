// api/getLatestCommit.js

const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const username = 'NatsumeLS';
  const repo = 'Gakumas-Localify-EN';

  try {
    const response = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);
    if (!response.ok) {
      throw new Error(`GitHub API returned status ${response.status}`);
    }

    const commits = await response.json();
    if (commits.length === 0) {
      res.status(404).json({ error: 'No commits found' });
      return;
    }

    const latestCommit = commits[0].sha;
    res.status(200).json({ latestCommit });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
