const express = require("express");
const Emails = require("../models/Emails");
const router = express.Router();

//create a user using : POST "/api/auth/" . Doesn't require Auth
router.post("/email", async (req, res) => {
  try {

    const emails = req.body;

    if (!emails) {
      res.status(400).json({ error: "Error" });
    } else {
      const data = await Emails.findOne({ email: emails.email });
      if (!data) {
        console.log(data);
        const result = await new Emails({ email: emails.email });
        result.save();
        res.status(201).json({ message: "created" });
      } else {
        res.status(401).json({message:"Something went wrong"});
      }
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
    console.log(err.message);
  }
});

module.exports = router;
