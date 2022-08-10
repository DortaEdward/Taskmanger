const { Schema, model } = require('mongoose');
const { stringConfig } = require('./modelsUtils');
const ListSchema = new Schema({
  boardId:{
    type: Schema.Types.ObjectId,
    ref:'Lists',
    required:true,
  },
  name:{
    ...stringConfig,
    min:2,
  },
  background:{
    type: String,
    default: '',
  },
},{timestamps:true});

const ListModel = model('Lists', ListSchema);

module.exports = ListModel;