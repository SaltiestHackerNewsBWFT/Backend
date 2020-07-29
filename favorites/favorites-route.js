

const router = require('express').Router()
const favoritesDb = require('./favoritesModel')


//get request for dummy data on favorites


// get request for list of all favorites saved--dummy data
router.get('/', (req,res) =>{

    favoritesDb.get()
    .then(favorites =>{
        res.status(200).json(favorites)
    })
    .catch(err =>{
        res.status(500).json({msg: 'unable to get favorites'})
    })
})

// get request for comment by comment id

router.get('/:id', (req, res) =>{
    

    favoritesDb.getById(req.params.id)
    .then(favorites =>{
        if(favorites){
           res.status(200).json(favorites)
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
    favoritesDb.insert(req.body)
    .then(favorites =>{
        res.status(201).json({what_you_have_posted: req.body, data: favorites })
    })
    .catch(err =>{
        res.status(400).json({errorMessage: "Please provide title and contents for the post."})
    })
})

router.delete('/:id', (req,res)=>{
    favoritesDb.remove(req.params.id)
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