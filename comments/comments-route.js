const axios = require('axios')

const router = require('express').Router()

const commentsApi = [
    {
        url: 'http://hn.algolia.com/api/v1/search_by_date?query=comment'
    }
]

router.get('/', (req, res)=>{

    // const getComments = commentsApi.map( async comments =>{

    //     const data = await axios({
    //         url: comments.url,
    //         method: 'GET',
    //         headers: {
    //             accept: 'application/json'
    //         }
    //     })

    //     return {

    //         url: comments.url,
    //         name:  data.author,
    //         description: data.comment_text
    //     }
    // })



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

module.exports =router