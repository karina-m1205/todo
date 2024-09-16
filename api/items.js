const express = require("express");
const ItemsService = require("../services/items.js");
const timeCounter = require("../core/timeCounter.js");
const router = express.Router();

// 1. shell version

router.get("/", async (req, res, next) => {
  try {
      const { offset, limit, ...options } = req.query;
      const result = await ItemsService.getAllItems(parseInt(offset), parseInt(limit), options);
      if (result.length === 0) {
          return res.status(404).send("items not found");
      };

      const itemsCount = result.length;
      const resData = {
          count: itemsCount,
          data: result,
      }
      res.resData = resData;
      res.status(200);
      next();
  } catch (err) {
      if (err.code = 400) {
          res.status(err.code);
          next(err);
      };
      res.status(500);
      next(err);
  }
});

router.use((req, res) => {
  const duration = timeCounter(req);
  resData = res.resData;
  resData.duration = duration;
  return res.send(resData);
});

router.use((err, req, res, next) => {
  res.send(err.message);
});


module.exports = router;