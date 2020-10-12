const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    password: String,
  },
  {
    timestamps: true
  }
);

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret.password;
    return ret;
  }
})

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  // password has been changed - salt and hash!!!!!!
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if(err) return next(err);
    // replace user provided password with the hash
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model('User', userSchema);