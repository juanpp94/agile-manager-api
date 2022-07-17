const {sprints_model} = require("../models");

/**
 * Get a list of sprints
 * @param {*} req 
 * @param {*} res 
 */
const get_sprints = async (req,res) => {
    //console.log("Holi vine de get_items");
    const data = await sprints_model.find({})
    res.send({data});
    /*
    const data = await sprints_model.find({});
    res.send({data});*/
}

/**
 * Get a sprint
 * @param {*} req 
 * @param {*} res 
 */
const get_sprint = async (req,res) => {
    console.log("Holi vine de get_item");
    res.send("Holi vine de get_item");
}

/**
 * Create a sprint
 * @param {*} req 
 * @param {*} res 
 */
const create_sprint = async (req,res) => {
    //console.log("Holi vine de create_sprint");
    //console.log("body:",req);
    const {body,prependListener} = req;
    console.log("body:",body);
    console.log("prepend:",prependListener);
    const data = await sprints_model.create(body);
    res.send({data});


}

/**
 * Update a Sprint
 * @param {*} req 
 * @param {*} res 
 */
const update_sprint = (req,res) => {
    console.log("Holi vine de update_sprint");
    res.send("Holi vine de update_sprint");
}


const delete_sprint = (req,res) => {
    console.log("Holi vine de delete_sprint");
    res.send("Holi vine de delete_sprint");
}

module.exports = {delete_sprint, update_sprint, create_sprint, get_sprint, get_sprints} 