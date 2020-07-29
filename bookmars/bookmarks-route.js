const axios = require('axios')

const router = require('express').Router()
const bookmarksDb = require('./bookmarksModel')


//get request for dummy data on bookmarks


// get request for list of all bookmarks saved--dummy data
router.get('/', (req,res) =>{

    bookmarksDb.get()
    .then(bookmarks =>{
        res.status(200).json(bookmarks)
    })
    .catch(err =>{
        res.status(500).json({msg: 'unable to get bookmarks'})
    })
})

// get request for comment by comment id

router.get('/:id', (req, res) =>{
    

    bookmarksDb.getById(req.params.id)
    .then(bookmarks =>{
        if(bookmarks){
           res.status(200).json(bookmarks)
        } else {
            res.status(404).json({message:'comment id not found'})
        }
    })
    .catch(err =>{
        res.status(500).json({message: 'failed', err})
    })
})
// post request to post/save a comment

router.post('/', (req, res)=>{
    bookmarksDb.insert(req.body)
    .then(bookmarks =>{
        res.status(201).json({what_you_have_posted: req.body, data: bookmarks })
    })
    .catch(err =>{
        res.status(400).json({errorMessage: "Please provide title and contents for the post."})
    })
})

router.delete('/:id', (req,res)=>{
    bookmarksDb.remove(req.params.id)
  .then( id =>{
    if(id) {
        res.status(200).json({removed: req.body})
        
    } else {
        res.status(400).json({message: " The bookmark with the specified ID does not exist"})
    }
  })  
  .catch(err =>{
      res.status(500).json({message:'comment not removed.....muhahahahaahahaha'})
  })
})
    

module.exports =router