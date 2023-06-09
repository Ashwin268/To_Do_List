const router = require("express").Router()
const Todo = require("../models/Todo");

// routes will be here
router.get("/", async(req, res) => {     //using async for asynchronoius task
    const allto = await Todo.find();  //grab all data and render it 
    res.render("index", {todo: allto})
})


module.exports = router;