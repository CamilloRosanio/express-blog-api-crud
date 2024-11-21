// Dichiarazione ROUTER
const express = require('express');
const router = express.Router();

// Dichiarazione dei REQUIRE delle risorse
const path = require('path');
const postController = require('../controllers/postsController');


// Dichiarazione delle ROUTES
router.get('/', postController.index);
router.get('/:id', postController.show);
router.post('/', postController.store);
router.put('/:id', postController.update);
router.patch('/:id', postController.modify);
router.delete('/:id', postController.destroy);



// EXPORT del ROUTER
module.exports = router;