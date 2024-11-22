// Dichiarazione dei REQUIRE delle risorse
const postsData = require('../data/posts.js');
const port = process.env.PORT;
const host = process.env.HOST;
const folderPath = `/img/`;



// index
function index(req, res) {

    // logica
    const term = req.query.term ?? '';

    let filteredArray = postsData.filter((element) => {
        
        // query TITLE
        const titleIncludesTerm = element.title.toLowerCase().includes(term.toLowerCase());
        // query CONTENT
        const contentIncludesTerm = element.content.toLowerCase().includes(term.toLowerCase());
        
        // query TAGS
        let tagsIncludesTerm = false;
  
        element.tags.forEach((tag) => {
            if (tag.toLowerCase().includes(term.toLowerCase())) tagsIncludesTerm = true;
        })
  
        return titleIncludesTerm || contentIncludesTerm || tagsIncludesTerm;
    })

    // Mapping dinamico e centralizzato del PATH delle immagini (.img in questo caso)
    postsData.forEach(element => {
        if (!element.img.includes(`${host}:${port}${folderPath}`)) {
            filteredArray.map(element => element.img = `${host}:${port}${folderPath}` + element.img);
        }
    })

    // risposta positiva
    res.json({
      foundElements: filteredArray.length,
      elements: filteredArray,
    });
}

// show
function show(req, res) {
    
    // logica
    const id = parseInt(req.params.id);
    let foundElement = postsData.find(post => post.id == id );

    // gestione errore
    if(!postsData.find(post => post.id == id )) {
        return res.status(404).json('Element not found');  
    }

    // Mapping dinamico e centralizzato del PATH dell'immagine'
    if (!foundElement.img.includes(`${host}:${port}${folderPath}`)) {
        foundElement.img = `${host}:${port}${folderPath}` + foundElement.img;
    }

    // risposta positiva
    res.json(foundElement);
}

// store
function store(req, res) {

    // recupero delle informazioni JSON
    const { title, content, img, tags } = req.body;

    // controllo validità dei dati ricevuti
    if (
        !title || 
        !content || 
        !img ||
        !tags ||
        !Array.isArray(tags) ||
        !tags.length
    ) {
        return res.status(400).json(`Missing values`);
    }

    // genero un nuovo ID univoco (in questo caso numerico)
    const newId = postsData.at(-1).id + 1;    

    // creazione di un nuovo OBJECT
    const newElement = {
        id: newId,
        title,
        content,
        img,
        tags
    }

    // PUSH del nuovo elemento nell'Array di Posts
    postsData.push(newElement);

    // risposta positiva
    res.json(newElement);
}

// update
function update(req, res) {

    // logica
    const id = parseInt(req.params.id);
    let foundElement = postsData.find(post => post.id == id );

    // gestione errore
    if(foundElement.length == 0) {
        return res.status(404).json('Element not found');  
    }

    // risposta positiva
    res.json(`Modifica totale del post con id ${id}`);
}

// modify
function modify(req, res) {
    
    // logica
    const id = parseInt(req.params.id);

    let foundElement = postsData.find((post, index) => post.id == id );

    // gestione errore
    if(!foundElement) {
        return res.status(404).json('Element not found');
    }

    // risposta positiva
    res.json(`Modifica parziale del post con id ${id}`);
}

// destroy
function destroy(req, res) {

    // logica
    const id = parseInt(req.params.id);
    let foundElement = postsData.find((post, index) => post.id == id );
    let deleteIndex = postsData.indexOf(foundElement);

    // gestione errore
    if(!foundElement) {
        return res.status(404).json('Element not found');
    }

    // logica
    postsData.splice(deleteIndex, 1);

    // risposta positiva
    res.json({
        foundPosts: postsData.length,
        posts: postsData,
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