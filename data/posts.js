// Per comodità centralizzo il PATH delle immagini (ad esempio)

const port = process.env.PORT;
const host = process.env.HOST;
const folderPath = `/img/`;



const postArray = [
    {
        id: 2,
        title: 'Ciambellone',
        content: 'Delizioso ciambellone',
        img: `${host}:${port}${folderPath}ciambellone.jpeg`,
        tags: ['ciambellone', 'Dolce', 'Torte']
    },
    {
        id: 4,
        title: 'Cracker di barbabietola',
        content: 'Preparazione cracker di barbabietola',
        img: `${host}:${port}${folderPath}cracker_barbabietola.jpeg`,
        tags: ['barbabietola', 'Cracker', 'impasto', 'salato']
    },
    {
        id: 6,
        title: 'Pane fritto',
        content: 'Come fare il pane fritto',
        img: `${host}:${port}${folderPath}pane_fritto_dolce.jpeg`,
        tags: ['dolce', 'Pane fritto']
    },
    {
        id: 8,
        title: 'Pasta di barbabietola',
        content: 'Come preparare la pasta alla barbabietola',
        img: `${host}:${port}${folderPath}pasta_barbabietola.jpeg`,
        tags: ['barbabietola', 'pasta', 'impasto', 'salato']
    },
    {
        id: 10,
        title: 'Torta paesana',
        content: '',
        img: `${host}:${port}${folderPath}torta_paesana.jpeg`,
        tags: ['torte', 'torta paesana', 'dolce']
    }
]





// EXPORT dell'Array per utilizzo su altri file JS
module.exports = postArray;