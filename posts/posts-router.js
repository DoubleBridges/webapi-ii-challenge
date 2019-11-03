const express = require('express') 
const router = express.Router()
const Posts = require('../data/db')

router.get('/', (req, res) => {
  Posts.find()
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: 'Error retrieving posts'
      })
    })
})

router.get('/:id', (req, res) => {
  Posts.findById(req.params.id)
    .then(post => {
      if (post) {
      res.status(200).json(post)
      } else {
        res.status(404).json({ message: 'post not found' })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: 'Error retrieving the post'
      })    
  })
})

router.post('/', (req, res) => {
  Posts.insert(req.body)
    .then(post => {
      res.status(201).json(post)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: 'Error adding post'
      })
    })
})

module.exports = router