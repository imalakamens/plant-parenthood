const Message = require('../../models/message');

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
    const message = await Message.create(req.body);
    res.status(201).json(message);
  } catch(err) {
    res.status(404).json(err);
  }
}

async function index(req, res) {
  try {
    const messages = await Message.find({})
    .populate('owner');
    res.status(200).json(messages);
  } catch(err) {
    res.status(404).json(err);
  }
}

