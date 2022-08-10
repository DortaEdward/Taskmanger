const { Schema, model } = require('mongoose');
const { stringConfig } = require('./modelsUtils');
const CardSchema = new Schema({
  listId:{
    type: Schema.Types.ObjectId,
    ref:'Lists',
    required:true,
  },
  title:{
    ...stringConfig,
    min:3,
    max:40
  },
  description:{
    type: String,
  },
  order:{
    Type: Number,
    default: 1
  }
},{timestamps:true});

const cardModel = model('Cards', CardSchema);

module.exports = cardModel;