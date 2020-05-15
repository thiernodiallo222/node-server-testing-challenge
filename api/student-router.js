const express = require("express");
const students = require("./student-model");
const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    if (!req.body.Name) {
      res.json({message: "Name is required. Please provide one."})
    } else {
       const payload = {
      name: req.body.Name,
      Major: req.body.Major,
       }
     const created = await students.add(payload)
      if (created) {
        res.status(201).json(created);
      }
 res.status(500).json({ message: 'Failed to create new student' });
    }    
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
    try {
        const data = await students.get()
        if (!data) {
            res.json({message:"Empty resource"})
        }
        res.json(data);
    } catch (error) {
        next(error);
    }
})


router.delete('/:id', (req, res) => {
    students.remove(req.params.id)
        .then(student => {
            if (!student) {
                res.status(400).json({message: "Cannot find specific student !"})
            } else {
                res.status(200).json({message: `Student has been removed successfully !`})
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "An unknown error occurred !" });
        })
})
    
module.exports = router;