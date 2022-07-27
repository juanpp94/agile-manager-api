const {projects_model} = require("../models");

/**
 * Get a list of projects
 * @param {*} req 
 * @param {*} res 
 */
const get_projects = async (req,res) => {
    //console.log("Holi vine de get_items");
    const data = await projects_model.find({})
    res.send({data});
    /*
    const data = await sprints_model.find({});
    res.send({data});*/
}

/**
 * Get a project
 * @param {*} req 
 * @param {*} res 
 */
const get_project = async (req,res) => {
    console.log("Holi vine de get_project");
    res.send("Holi vine de get_project");
}

/**
 * Create a project
 * @param {*} req 
 * @param {*} res 
 */
const create_project = async (req,res) => {
    //console.log("Holi vine de create_sprint");
    //console.log("body:",req);
    const {body,prependListener} = req;
    console.log("body:",body);
    console.log("prepend:",prependListener);
    const data = await projects_model.create(body);
    res.send({data});


}

/**
 * Update a Sprint
 * @param {*} req 
 * @param {*} res 
 */
const update_project = (req,res) => {
    console.log("Holi vine de update_project");
    res.send("Holi vine de update_project");
}


const delete_project = (req,res) => {
    console.log("Holi vine de delete_project");
    res.send("Holi vine de delete_project");
}

module.exports = {delete_project, update_project, create_project, get_project, get_projects} 