const express = require('express');
const router = express.Router();
const {
    create,
    list,
    listAllBlogsCategoriesTags,
    read,
    remove,
    update
} = require('../controllers/blog');


router.post('/blog', create);
router.get('/blogs', list);
router.get('/blog/:slug', read);
router.delete('/blog/:slug', remove);
router.post('/blogs-categories-tags', listAllBlogsCategoriesTags);
router.put('/blog/:slug', update);

module.exports = router;
