const express = require("express");
const router = express.Router();
const {get_project,get_projects,create_project,update_project,delete_project} = require("../controllers/projects");

router.get("/",get_projects);
router.get("/",get_project);
router.post("/",create_project);
router.put("/",update_project);
router.delete("/",delete_project);

module.exports = router;