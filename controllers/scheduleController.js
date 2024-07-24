const Band = require('../models/band');
const Schedule = require('../models/schedule');

exports.createSchedule = async (req, res) => {
  try {
    const { bandId, date, location } = req.body;
    const schedule = await Schedule.create({ bandId, date, location });
    res.status(201).json({ data: schedule });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.findAll({
    include: {
      model: Band,
      attributes: ['name']
    }
  });

    res.status(200).json({ data: schedules.map(schedule => schedule.toJSON()) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const { bandId, date, location } = req.body;
    const schedule = await Schedule.findByPk(id);
    if (!schedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }
    schedule.bandId = bandId;
    schedule.date = date;
    schedule.location = location;
    await schedule.save();
    res.status(200).json({ data: schedule });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await Schedule.findByPk(id);
    if (!schedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }
    await schedule.destroy();
    res.status(200).json({ message: 'Schedule deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
