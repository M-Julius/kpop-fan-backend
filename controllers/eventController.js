const Band = require("../models/band");
const Event = require("../models/event");

exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, bandId } = req.body;
    let photos = [];

    if (req.files) {
      req.files.forEach((file) => {
        photos.push(file.path);
      });
    }

    const event = await Event.create({
      title,
      description,
      date,
      bandId,
      photos,
    });
    res.status(201).json({ data: event });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEvents = async (req, res) => {
    try {
      const events = await Event.findAll({
        include: {
          model: Band,
          attributes: ['name']
        }
      });
      res.status(200).json({ data: events });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.getEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByPk(id,{
      include: {
        model: Band,
        attributes: ['name']
      }
    });
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json({ data: event });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, date, bandId } = req.body;
    const event = await Event.findByPk(id);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    if (req.files) {
      let photos = event.photos || [];
      req.files.forEach((file) => {
        photos.push(file.path);
      });
      event.photos = photos;
    }

    event.title = title;
    event.description = description;
    event.date = date;
    event.bandId = bandId;
    await event.save();
    res.status(200).json({ data: event });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    await event.destroy();
    res.status(200).json({ message: "Event deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
