const router = require('express').Router()

const Profile = require('./profileModel')


// Gets all users info
router.get('/', (req, res) =>{
    const {username, email} = req.body
    Profile.find()
    .then(profile =>{
        res.status(200).json(profile)
    })
    .catch(err => res.send(err))
})

//get users without password
router.get('/list', (req, res) =>{
    const {username, email} = req.body
    Profile.findinfo()
    .then(profile =>{
        res.status(200).json(profile)
    })
    .catch(err => res.send(err))
})


//Gets profile infromation on logged in user
router.get('/profile', (req, res) =>{
    const {username, email} = req.body
    Profile.find()
    .then(profile =>{
        res.status(200).json({data: `${profile.username, profile.email}`, jwt: req.jwt})
    })
    .catch(err => res.send(err))
})

// get comments from specific user throught params

router.get('/:id/comments', (req, res) =>{
    const { id} = req.params
    
    Profile.findComments(id)
    .then(comments =>{
        if (comments.length) {
            res.json(comments)
        } else{
            res.status(404).json({message: 'could not find comments'})
        }
    })
    .catch(err =>{
        res.status(500).json({message:'failed to get comments'})
    })
})

//update user info
router.put('/:id', (req, res) => {
    // do your magic!
    const changes = req.body
    Profile.update(req.params.id, changes)
    .then(user=>{
      res.status(200).json({msg: 'user updated'})
    })
   
  });

  //Delete user by id

  router.delete('/:id', (req, res) => {
    // do your magic!
    Profile.remove(req.params.id)
    .then(id=>{
     res.status(200).json({user:'user deleted'})
    
      })
      .catch(err =>{
        res.status(500).json({message:'Message not removed.....muhahahahaahahaha'})
    })
  });


module.exports = router