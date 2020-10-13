const plant = require('../../models/plant');
const Plant = require('../../models/plant')

module.exports = {
  index,
  create,
  show,
  update,
  delete: deleteOne

}

async function deleteOne(req, res) {
  try {
    const deletedPlant = await Plant.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedPlant)
  } catch(err) {
    res.status(404).json(err)
  }
}

async function update(req, res) {

}

async function show(req, res) {

}

async function create(req, res) {
  try {
    const plant = await Plant.create(req.body);
    res.status(201).json(plant);
  } catch(err) {
    res.status(404).json(err);
  }
}

async function index(req, res) {
  try {
    const plants = await Plant.find({});
    res.status(200).json(plants);
  } catch(err) {
    res.status(404).json(err);
  }
}

