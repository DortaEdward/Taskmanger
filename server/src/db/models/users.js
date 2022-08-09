const { Schema, model } = require('mongoose');
const { stringConfig } = require('./modelsUtils');

const UsersSchema = new Schema({
  email: {
    ...stringConfig,
    min:5,
    max:30
  },
  displayName: {
    ...stringConfig,
    min:3,
    max:30
  },
  password: {
    ...stringConfig,
    min:8,
    max:30
  }
},
{ timestamps: true },
{ versionKey: false });

const User = model('Users', UsersSchema);

module.exports = User;