const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Mock database - replace with actual DB queries
const users = {};

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, first_name, last_name } = req.body;
    
    if (users[email]) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    const passwordHash = await bcrypt.hash(password, 10);
    
    users[email] = {
      username,
      email,
      password_hash: passwordHash,
      first_name,
      last_name,
      created_at: new Date()
    };
    
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = users[email];
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { email, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRY }
    );
    
    res.json({ token, user: { email, username: user.username } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
