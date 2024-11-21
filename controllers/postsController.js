// Dichiarazione dei REQUIRE delle risorse
const path = require('path');
const postArray = require('../data/posts.js');



// index
function index() {

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

}


// show
function show() {
    const id = req.params.id;

    filteredArray = postArray.filter(post => parseInt(post.id) === parseInt(id));

    res.json(filteredArray);
}


// store
function store() {

    res.json('Crea un nuovo Post');
}


// update
function update() {
    
    // Estrazione di un singolo PARAM dall'URL con DESTRUCTURING, in questo caso "id"
    const { id } = req.params;
    
    res.json(`Modifica totale del post con id ${id}`);
}


// modify
function modify() {
    
    const { id } = req.params;

    res.json(`Modifica parziale del post con id ${id}`);
}


// destroy
function destroy() {

    const id = req.params.id;

    res.json(`Eliminazione del post con id ${id}`);
}



module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy,
}