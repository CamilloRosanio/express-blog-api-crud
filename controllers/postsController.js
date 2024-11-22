// Dichiarazione dei REQUIRE delle risorse
const postArray = require('../data/posts.js');



// index
function index(req, res) {

    // logica
    const term = req.query.term ?? '';
  
    let filteredArray = postArray.filter((element) => {
  
        const titleIncludesTerm = element.title.toLowerCase().includes(term.toLowerCase());
        const contentIncludesTerm = element.content.toLowerCase().includes(term.toLowerCase());
  
        let tagsIncludesTerm = false;
  
        element.tags.forEach((tag) => {
            if (tag.toLowerCase().includes(term.toLowerCase())) tagsIncludesTerm = true;
        })
  
        return titleIncludesTerm || contentIncludesTerm || tagsIncludesTerm;
    })

    // risposta positiva
    // in questo caso non c'è errore ma al massimo vengono trovati zero post con quella query
    res.json({
      foundPosts: filteredArray.length,
      posts: filteredArray,
    });
}

// show
function show(req, res) {
    
    // logica
    const id = parseInt(req.params.id);

    let foundElement = postArray.find((post, index) => post.id == id );

    // gestione errore
    if(foundElement.length == 0) {
        return res.json('Post not found');
            
    }

    // risposta positiva
    res.json(foundElement);
}

// store
function store(req, res) {
    res.json('Crea un nuovo Post');
}

// update
function update(req, res) {

    // logica
    const id = parseInt(req.params.id);

    let foundElement = postArray.find((post, index) => post.id == id );

    // gestione errore
    if(!foundElement) {
        return res.sendStatus(404);
    }

    // risposta positiva
    res.json(`Modifica totale del post con id ${id}`);
}

// modify
function modify(req, res) {
    
    // logica
    const id = parseInt(req.params.id);

    let foundElement = postArray.find((post, index) => post.id == id );

    // gestione errore
    if(!foundElement) {
        return res.sendStatus(404);
    }

    res.json(`Modifica parziale del post con id ${id}`);
}

// destroy
function destroy(req, res) {

    // logica
    const id = parseInt(req.params.id);
    let foundElement = postArray.find((post, index) => post.id == id );
    let deleteIndex = postArray.indexOf(foundElement);

    // gestione errore
    if(!foundElement) {
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