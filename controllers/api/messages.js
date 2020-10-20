const Message = require('../../models/message');
const plant = require('../../models/plant');

module.exports = {
  index,
  create,
  show,
  delete: deleteOne

}

async function deleteOne(req, res) {
  try {
    const deletedMessage = await Message.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedMessage)
  } catch(err) {
    res.status(404).json(err)
  }
}


async function show(req, res) {
  try {
    const message = await Message.findById(req.params.id);
    res.status(200).json(message)
  } catch(err) {
    res.status(404).json(err)
  }
}

async function create(req, res) {
  try {
    req.body.sender = req.user._id
    const message = await Message.create(req.body);
    await message.populate('sender recipient').execPopulate();
    res.status(201).json(message);
  } catch(err) {
    res.status(404).json(err);
  }
}

async function index(req, res) {
  try {
    const messages = await Message.find({})
    .populate('recipient sender');
    res.status(200).json(messages);
  } catch(err) {
    res.status(404).json(err);
  }
}

