const {Router} = require('express')
const router = Router()
const Post = require('../models/Post')


router.get('/', async(req, res) => {
  try {
    const posts = await Post.find() 
    res.json(posts)
  } catch (err) {
    res.json({message: err})
  }
})

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.json(post)
  } catch (err) {
    res.json({message: err})
  }
  
})

router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  })

  try {
    const savedPost = await post.save()
    res.json(savedPost)
  } catch (err) {
    res.json({message: err})
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const deletedPost = await Post.deleteOne({_id: req.params.id})
    res.json(deletedPost)
  } catch (err) {
    res.json({message: err})
  }
})

router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      {_id: req.params.id},
      { $set: {title: req.body.title}},
      { $set: {description: req.body.description}}, 
    )
    res.json(updatedPost)
  } catch (err) {
    res.json({message: err})
  }
})



module.exports = router