const { Schema, model } = require('mongoose');
const { stringConfig } = require('./modelsUtils');


const BoardsSchema = new Schema({
  name: {
    ...stringConfig,
    min:5,
    max:30
  },
  background: {
    type: String,
    min: 5,
    max: 30,
    default: ""
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref:'Users',
    required:true,
  }
},
{ timestamps: true },
{ versionKey: false });

const Board = model('Boards', BoardsSchema);

module.exports = Board;