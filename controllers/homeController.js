const Band = require('../models/band');
const Event = require('../models/event');
const Schedule = require('../models/schedule');

exports.getHomepageData = async (req, res) => {
  try {
    const bands = await Band.findAll();
    const events = await Event.findAll();
    const schedules = await Schedule.findAll();
    res.status(200).json({ data: { bands, events, schedules } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
