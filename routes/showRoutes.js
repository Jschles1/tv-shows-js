const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

require("../models/Show");

module.exports = app => {
  app.post("/api/shows", requireLogin, async (req,res) => {
    const { name, network, weekday, showtime } = req.body;
    const show = new show({
      name,
      network, 
      weekday,
      showtime,
      _user: req.user.id
    });
    try {
      await show.save();
    } catch (e) {
      res.status(422).send(e);
    }
  });
};