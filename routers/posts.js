// Dichiarazione ROUTER
const express = require('express');
const router = express.Router();

// Dichiarazione dei REQUIRE delle risorse
const path = require('path');
const postController = require('../controllers/postsController');



// index
router.get('/', (req, res) => {

    const term = req.query.term ?? '';
  
    let filteredPosts;
  
    filteredPosts = postArray.filter((post) => {
  
        const titleIncludesTerm = post.title.toLowerCase().includes(term.toLowerCase());
  
        let tagsIncludesTerm = false;
  
        post.tags.forEach((tag) => {
            if (tag.toLowerCase().includes(term.toLowerCase())) tagsIncludesTerm = true;
        })
  
        return titleIncludesTerm || tagsIncludesTerm;
    })
  
    res.json({
      postNum: filteredPosts.length,
      posts: filteredPosts,
    });

})


// show
router.get('/:id', (req, res) => {
    
    // Estrazione di un singolo PARAM dall'URL, in questo caso "id"
    const id = req.params.id;

    filteredArray = postArray.filter(post => parseInt(post.id) === parseInt(id));

    res.json(filteredArray);
})


// store
router.post('/', (req, res) => {

    res.json('Crea un nuovo Post');
})


// update
router.put('/:id', (req, res) => {
    
    // Estrazione di un singolo PARAM dall'URL con DESTRUCTURING, in questo caso "id"
    const { id } = req.params;
    
    res.json(`Modifica totale del post con id ${id}`);
})


// modify
router.patch('/:id', (req, res) => {
    
    const { id } = req.params;

    res.json(`Modifica parziale del post con id ${id}`);
})


// destroy
router.delete('/:id', (req, res) => {

    const id = req.params.id;

    res.json(`Eliminazione del post con id ${id}`);
})




// EXPORT del ROUTER
module.exports = router;