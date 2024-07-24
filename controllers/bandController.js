const Band = require("../models/band");

exports.createBand = async (req, res) => {
  try {
    const { name, description, members, playlist } = req.body;
    let photoGroup = [];

    Band.findOne({ where: { name } }).then((band) => {
        if (band) {
            return res.status(400).json({ error: "Band already exists" });
        }
        }
    );

    if (req.files) {
      req.files.forEach((file) => {
        photoGroup.push(file.path);
      });
    }

    const band = await Band.create({
      name,
      description,
      photoGroup,
      members,
      playlist,
    });
    res.status(201).json({ data: band });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBands = async (req, res) => {
  try {
    const bands = await Band.findAll();
    res.status(200).json({ data: bands.map((band) => band.toJSON()) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBand = async (req, res) => {
  try {
    const { id } = req.params;
    const band = await Band.findByPk(id);
    if (!band) {
      return res.status(404).json({ error: "Band not found" });
    }
    res.status(200).json({ data: band });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.updateBand = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, members, playlist } = req.body;
    const band = await Band.findByPk(id);

    if (!band) {
      return res.status(404).json({ error: "Band not found" });
    }

    if (req.files) {
      let photoGroup = band.photoGroup || [];
      req.files.forEach((file) => {
        photoGroup.push(file.path);
      });
      band.photoGroup = photoGroup;
    }

    band.name = name;
    band.description = description;
    band.members = members;
    band.playlist = playlist;
    await band.save();
    res.status(200).json({ data: band });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBand = async (req, res) => {
  try {
    const { id } = req.params;
    const band = await Band.findByPk(id);
    if (!band) {
      return res.status(404).json({ error: "Band not found" });
    }
    await band.destroy();
    res.status(200).json({ message: "Band deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
