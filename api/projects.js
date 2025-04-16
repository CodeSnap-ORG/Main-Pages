const express = require('express');
const router = express.Router();

let projects = [];

// GET /api/projects
router.get('/api/projects', (req, res) => {
  res.json({ projects });
});

// PUT /api/projects
router.put('/api/projects', (req, res) => {
  const { name, thumbnail, genre, link } = req.body;

  if (!name || !thumbnail || !genre || !link) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const project = {
    name,
    image: thumbnail,
    genre,
    link: link
  };

  projects.push(project);
  res.status(201).json({ message: 'Project added', project });
});

module.exports = router;
