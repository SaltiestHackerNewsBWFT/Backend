const axios = require('axios')

const router = require('express').Router()

router.get('/', (req, res)=>{
    const requiestOptions ={
        headers: {accept: 'application/json'},
    }

    axios
    .get('http://hn.algolia.com/api/v1/search_by_date?query=comment', requestOptions)
    .then(response =>{
        res.status(200).json(response.data)
    })
    .catch(err =>{
        res.status(500).json({message: 'error fetching comments', error:err})
    })
})

module.exports =router