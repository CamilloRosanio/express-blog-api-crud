// Dichiarazione dei REQUIRE delle risorse
const postArray = require('../data/posts.js');



// index
function index(req, res) {

    // logica
    const term = req.query.term ?? '';
    let filteredPosts;
  
    filteredPosts = postArray.filter((post) => {
  
        const titleIncludesTerm = post.title.toLowerCase().includes(term.toLowerCase());
        const contentIncludesTerm = post.content.toLowerCase().includes(term.toLowerCase());
  
        let tagsIncludesTerm = false;
  
        post.tags.forEach((tag) => {
            if (tag.toLowerCase().includes(term.toLowerCase())) tagsIncludesTerm = true;
        })
  
        return titleIncludesTerm || contentIncludesTerm || tagsIncludesTerm;
    })

    // risposta positiva
    // in questo caso non c'è errore ma al massimo vengono trovati zero post con quella query
    res.json({
      foundPosts: filteredPosts.length,
      posts: filteredPosts,
    });
}


// show
function show(req, res) {
    
    // logica
    const id = parseInt(req.params.id);
    filteredPost = postArray.filter(post => parseInt(post.id) === parseInt(id));

    // gestione errore
    if(filteredPost.length == 0) {
        res.json('Post not found');
    }

    // risposta positiva
    res.json(filteredPost);
}


// store
function store(req, res) {
    res.json('Crea un nuovo Post');
}


// update
function update(req, res) {
    const id = parseInt(req.params.id);
    res.json(`Modifica totale del post con id ${id}`);
}


// modify
function modify(req, res) {
    const id = parseInt(req.params.id);
    res.json(`Modifica parziale del post con id ${id}`);
}


// destroy
function destroy(req, res) {

    // logica
    const id = parseInt(req.params.id);
    findPost = postArray.find((post, index) => post.id == id );
    deleteIndex = postArray.indexOf(findPost);

    // gestione errore
    if(!findPost) {
        return res.sendStatus(404);
    }

    // logica
    postArray.splice(deleteIndex, 1);

    // risposta positiva
    res.json({
        foundPosts: postArray.length,
        posts: postArray,
      });
}



// EXPORT delle funzioni CRUD
module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy,
}