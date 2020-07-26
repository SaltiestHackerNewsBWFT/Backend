const router = require('express').Router()

const Profile = require('./profileModel')

router.get('/', (req, res) =>{
    const {username, email} = req.body
    Profile.find()
    .then(profile =>{
        res.status(200).json({data: `${profile.username, profile.email}`, jwt: req.jwt})
    })
    .catch(err => res.send(err))
})

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

module.exports = router