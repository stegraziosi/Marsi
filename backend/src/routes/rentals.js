const express = require('express');
const router = express.Router();

// Get all rentals
router.get('/', (req, res) => {
  try {
    // TODO: Query database for all rentals
    res.json({ rentals: [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get active rentals
router.get('/active', (req, res) => {
  try {
    // TODO: Query database for active rentals
    res.json({ rentals: [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get rental by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    // TODO: Query database for specific rental
    res.json({ rental: {} });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create new rental
router.post('/', (req, res) => {
  try {
    const { member_id, aircraft_id, rental_start } = req.body;
    // TODO: Insert new rental into database and update aircraft availability
    res.status(201).json({ message: 'Rental created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// End rental
router.put('/:id/end', (req, res) => {
  try {
    const { id } = req.params;
    const { hours_used } = req.body;
    // TODO: End rental, calculate total amount, update aircraft availability
    res.json({ message: 'Rental ended' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
