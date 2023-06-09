const router = require("express").Router();
const Todo = require("../models/Todo");

// routes
router
  .post("/add/todo", (req, res) => {
    const { todo } = req.body;
    const newTo = new Todo({ todo });

    // save the todo
    newTo.save() //for savin we use save method
      .then(() => {
        console.log("Task Added Successfully!"); //this is only executed when the operation i successfully executed
        res.redirect("/");   //redirect to the homepage
      })
      .catch((err) => console.log(err)); //catch block when encountered with some error
  })
  .get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
      .then(() => {
        console.log("Task Deleted Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });
  

module.exports = router;
