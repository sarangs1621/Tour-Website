const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

// Login endpoint

// Get users (admin)
app.get('/api/admin/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// Get tours (admin)
app.get('/api/admin/tours', async (req, res) => {
  const tours = await prisma.tour.findMany();
  res.json(tours);
});

// Add a new tour booking
app.post('/api/tours', async (req, res) => {
  try {
    const { focal_name, email, arrival_date, departure_date, head_count, social_media_link, contact_no, package_name } = req.body;

    // Insert into the tours table using Prisma
    const tour = await prisma.tour.create({
      data: {
        name: focal_name,
        email: email,
        arrival_date: new Date(arrival_date),
        departure_date: new Date(departure_date),
        head_count: parseInt(head_count, 10),
        social_media_link: social_media_link,
        contact_no: contact_no,
        package_name: package_name,
      },
    });

    res.status(201).json({ message: 'Tour booking created successfully', tour });
  } catch (error) {
    console.error(error);
    console.log(1)
    res.status(500).json({ error: 'Failed to create tour booking' });
  }
});
// Register endpoint
// User registration endpoint
app.post('/api/auth/register', async (req, res) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' });
    }
  
    try {
      // Check if email already exists
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create the user
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: 'user'
        },
      });
  
      return res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      console.error('Error in user registration:', error);
      return res.status(500).json({ message: 'Error registering user. Please try again.' });
    }
  });
  
  app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }
  
    try {
      // Check if the email exists
      const user = await prisma.user.findUnique({ where: { email } });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password.' });
      }
  
      // Compare password with the stored hash
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password.' });
      }
  
      // Successfully logged in, return user details with the role
      return res.status(200).json({
        message: 'Login successful',
        user: {
          name: user.name,
          email: user.email,
          role: user.role, // Include role in response
        },
      });
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
  });
  
  
  app.post('/api/contact-us', async (req, res) => {
    const { firstName, lastName, email, message, whatsappNo, touristNo } = req.body;

    try {
        // Save data to the database
        const newQuery = await prisma.contactUs.create({
            data: {
                firstName,
                lastName,
                email,
                message,
                whatsappNo,
                touristNo,
            },
        });
        res.status(201).json({ success: true, data: newQuery });
    } catch (error) {
        console.error('Error saving message:', error.message);
        res.status(500).json({ success: false, message: error.message });
    }
});

app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Get all tours
app.get('/api/tours', async (req, res) => {
  try {
    const tours = await prisma.tour.findMany();
    res.json(tours);
  } catch (error) {
    console.error('Error fetching tours:', error);
    res.status(500).json({ error: 'Failed to fetch tours' });
  }
});

// Fetch all ContactUs queries
app.get('/api/queries', async (req, res) => {
  try {
    const queries = await prisma.contactUs.findMany();
    res.json(queries);
  } catch (error) {
    console.error('Error fetching queries:', error);
    res.status(500).json({ error: 'Failed to fetch queries' });
  }
});
app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: { id },
    });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
});
// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
