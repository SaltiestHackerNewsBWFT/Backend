const axios = require('axios')

const router = require('express').Router()
const CommentsDb = require('./commentsModel')


//get request for dummy data on comments
router.get('/data', (req, res)=>{
const requestOptions ={
        headers: {accept: 'application/json'},
    }

    axios
    .get('http://hn.algolia.com/api/v1/search_by_date?query=comment', requestOptions)
    .then(response =>{

        res.status(200).json(response.data.hits)
    })
    .catch(err =>{
        res.status(500).json({message: 'error fetching comments', error:err})
    })
})

// get request for list of all comments saved--dummy data
router.get('/', (req,res) =>{

    CommentsDb.get()
    .then(comments =>{
        res.status(200).json(comments)
    })
    .catch(err =>{
        res.status(500).json({msg: 'unable to get comments'})
    })
})

// get request for comment by comment id

router.get('/:id', (req, res) =>{
    

    CommentsDb.getById(req.params.id)
    .then(comments =>{
        if(comments){
           res.status(200).json(comments)
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
    CommentsDb.insert(req.body)
    .then(comments =>{
        res.status(201).json({what_you_have_posted: req.body, data: comments })
    })
    .catch(err =>{
        res.status(400).json({errorMessage: "Please provide title and contents for the post."})
    })
})

router.delete('/:id', (req,res)=>{
    CommentsDb.remove(req.params.id)
  .then( id =>{
    if(id) {
        res.status(200).json({removed: req.body})
        
    } else {
        res.status(400).json({message: " The comment with the specified ID does not exist"})
    }
  })  
  .catch(err =>{
      res.status(500).json({message:'comment not removed.....muhahahahaahahaha'})
  })
})
    

module.exports =router