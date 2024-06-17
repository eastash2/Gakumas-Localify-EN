const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const username = 'NatsumeLS';
  const repo = 'Gakumas-Localify-EN';
  const apiUrl = `https://api.github.com/repos/${username}/${repo}/commits?per_page=1`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const latestCommitHash = data[0].sha;

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache');
    res.status(200).json({ hash: latestCommitHash });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch latest commit hash' });
  }
};
