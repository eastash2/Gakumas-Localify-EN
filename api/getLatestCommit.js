// api/getLatestCommit.js

import fetch from 'node-fetch';

export default async (req, res) => {
  const label = 'Latest Commit';
  const username = 'NatsumeLS';
  const repo = 'Gakumas-Localify-EN';
  const apiUrl = `https://api.github.com/repos/${username}/${repo}/commits?per_page=1`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const latestCommitHash = data[0].sha.substring(0, 7);

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache');
    res.status(200).json({ 
      schemaVersion: 1, 
      label: label, 
      message: latestCommitHash, 
      color: 'blue' 
    });
  } catch (error) {
    res.status(500).json({ 
      schemaVersion: 1, 
      label: label, 
      message: 'Error', 
      color: 'red' 
    });
  }
};
