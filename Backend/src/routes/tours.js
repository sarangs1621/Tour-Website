const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Endpoint to create a new tour booking
router.post('/', async (req, res) => {
  try {
    const tour = await prisma.tour.create({
      data: {
        name: req.body.focal_name,
        email: req.body.email,
        arrival_date: new Date(req.body.arrival_date),
        departure_date: new Date(req.body.departure_date),
        head_count: parseInt(req.body.head_count),
        social_media_link: req.body.social_media_link,
        contact_no: req.body.contact_no,
        package_name: req.body.package_name,
      },
    });
    res.status(201).json(tour);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

module.exports = router;
