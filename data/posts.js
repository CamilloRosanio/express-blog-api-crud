// Array di partenza

const postsData = [
    {
        id: 2,
        title: 'Ciambellone',
        content: 'Delizioso ciambellone',
        img: `ciambellone.jpeg`,
        tags: ['ciambellone', 'Dolce', 'Torte']
    },
    {
        id: 4,
        title: 'Cracker di barbabietola',
        content: 'Preparazione cracker di barbabietola',
        img: `cracker_barbabietola.jpeg`,
        tags: ['barbabietola', 'Cracker', 'impasto', 'salato']
    },
    {
        id: 6,
        title: 'Pane fritto',
        content: 'Come fare il pane fritto',
        img: `pane_fritto_dolce.jpeg`,
        tags: ['dolce', 'Pane fritto']
    },
    {
        id: 8,
        title: 'Pasta di barbabietola',
        content: 'Come preparare la pasta alla barbabietola',
        img: `pasta_barbabietola.jpeg`,
        tags: ['barbabietola', 'pasta', 'impasto', 'salato']
    },
    {
        id: 10,
        title: 'Torta paesana',
        content: 'La torta paesana più buona',
        img: `torta_paesana.jpeg`,
        tags: ['torte', 'torta paesana', 'dolce']
    }
]




/* Elemento TEST da aggiungere tramite POSTMAN in richiesta POST

ATTENZIONE: l'elemento è scritto in modo tale da essere letto come JSON, quindi con gli apici anche nelle PROPERTIES dell'OBJECT

const newElement =
{
    "title": "Pizza alla nutella",
    "content": "Ricetta per una strepitosa pizza alla nutella",
    "img": "pizza-alla-nutella.webp",
    "tags": ["nutella", "impasto", "dolce"]
}

*/




// EXPORT dell'Array per utilizzo su altri file JS
module.exports = postsData;