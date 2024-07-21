const express = require("express");
const router = express.Router();

let items = [
    {id: 1, name : "Item 1"},
    {id: 2, name : "Item 2"},
    {id: 3, name : "Item 3"},
    {id: 4, name : "Item 4"},
    {id: 5, name : "Item 5"}
]
router.get("/home", (req, res)=>{
    res.json({"message": "Home page is rendered!"})
})

router.get("/about", (req, res)=>{
    res.json({"message": "About page is rendered!"})
})

router.get("/items", (req, res)=>{
    res.json(items)
})

router.get("/items/:id", (req, res)=>{
    console.log(req)
    var id = req.params.id;
    const item = items.filter((item)=> item.id === parseInt(id))
    if(item.length === 0) {
        return res.status(404).send("Item not found")
    }
    res.json(item)
})


router.post("/addItem", (req, res)=>{
    console.log(req.body)
    const newItem = {
        id: items.length + 1,
        name: req.body.name
    }
    items.push(newItem)
    res.status(201).json("New item has added")
})


router.put("/items/:id", (req, res)=>{
    console.log(req.body)
    const item = items.find(item => item.id === parseInt(req.params.id));
    if(!item) return res.status(404).send("Item not found!");
    console.log(item);
    item.name = req.body.name;
    res.json(item);
})

router.delete("/items/:id", (req, res)=>{
    const itemIndex = items.findIndex(item => item.id === parseInt(req.params.id));
    if(itemIndex === -1) return res.status(404).send("Item not found!");

    items.splice(itemIndex, 1);
    res.status(204).send();
})

module.exports = router;
