const express = require('express');
const router = express.Router();

// Get all aircraft
router.get('/', (req, res) => {
  try {
    // TODO: Query database for all aircraft
    res.json({ aircraft: [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get available aircraft
router.get('/available', (req, res) => {
  try {
    // TODO: Query database for available aircraft
    res.json({ aircraft: [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get aircraft by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    // TODO: Query database for specific aircraft
    res.json({ aircraft: {} });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new aircraft
router.post('/', (req, res) => {
  try {
    const { registration, aircraft_type, manufacturer, model, hourly_rate } = req.body;
    // TODO: Insert new aircraft into database
    res.status(201).json({ message: 'Aircraft added' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update aircraft
router.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    // TODO: Update aircraft in database
    res.json({ message: 'Aircraft updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
