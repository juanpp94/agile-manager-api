const express = require("express");
const router = express.Router();
const {get_sprint,get_sprints,create_sprint,update_sprint,delete_sprint} = require("../controllers/sprints");

router.get("/",get_sprints);
router.get("/",get_sprint);
router.post("/",create_sprint);
router.put("/",update_sprint);
router.delete("/",delete_sprint);

module.exports = router;