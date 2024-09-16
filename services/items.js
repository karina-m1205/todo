const itemsModel = require('../models/items.js');

class ItemsService {
  static async getAllItems(offset, limit, options = {}) {
    if (!isFinite(offset)) {
      const err = new Error("invalid offset");
      err.code = 400;
      throw err;
    };
    if (!isFinite(limit)) {
      const err = new Error("invalid limit");
      err.code = 400;
      throw err;
    };

    const result = await itemsModel.find({})
      .skip(offset)
      .limit(limit)
      .exec();
    return result; //return [] if not found item
  };
}

module.exports = ItemsService;

