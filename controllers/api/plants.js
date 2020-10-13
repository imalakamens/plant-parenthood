const Plant = require('../../models/plant')

module.exports = {
  index,
  create
}

async function create(req, res) {
  const plant = await Plant.create(req.body);
  res.status(201).json(plant);
}

async function index(req, res) {
  const plants = await Plant.find({});
  res.status(200).json(plants);
}

