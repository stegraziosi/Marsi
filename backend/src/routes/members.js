const express = require('express');
const router = express.Router();

// Get all members
router.get('/', (req, res) => {
  try {
    // TODO: Query database for all members
    res.json({ members: [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get member by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    // TODO: Query database for specific member
    res.json({ member: {} });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create new member
router.post('/', (req, res) => {
  try {
    const { first_name, last_name, email, phone, license_number } = req.body;
    // TODO: Insert new member into database
    res.status(201).json({ message: 'Member created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update member
router.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    // TODO: Update member in database
    res.json({ message: 'Member updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete member
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    // TODO: Delete member from database
    res.json({ message: 'Member deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
