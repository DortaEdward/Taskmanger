const router = require('express').Router();
const { sanitize } = require('../middleware');
const Boards = require('../db/models/board');

// Create Board
router.post('/create', sanitize, async (req, res, next) => {
  try {
    if(req.body){
      const createdBoard = await Boards.create(req.body);
      await createdBoard.save();
      res.status(200).json({
        status: 200,
        message: 'Board Created'
      });
    } else {
      const error = new Error('Missing Values');
      res.status(401);
      next(error);
    }
  } catch (error) {
    next(error);
  }
})
// Find Boards
router.get('/', async (req, res, next) => {
try {
  const { ownerId, boardId } = req.query;
  if(ownerId === req.user._id){
    if(!boardId){
      const boards = await Boards.find({ownerId: ownerId});
      res.status(200).json({
        status: res.status,
        boards: boards,
      })
    } else {
      const board = await Boards.findOneById({boardId: boardId});
      res.status(200).json({
        status: res.status,
        boards: board,
      })
    }
  } else {
    const error = new Error('Unauthorized');
    next(error);
  }
} catch (error) {
  next(error);
}
});

// Update Board

// Delete Board

module.exports = router;