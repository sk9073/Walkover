const express = require('express');
const router = express.Router();
const {
    create,
    list,
    listAllBlogsCategoriesTags,
    read,
    remove,
    update,
    listByUser
} = require('../controllers/blog');

const { canUpdateDeleteBlog } = require('../controllers/auth');


router.post('/blog', create);
router.get('/blogs', list);
router.get('/blog/:slug', read);
router.delete('/blog/:slug', remove);
router.post('/blogs-categories-tags', listAllBlogsCategoriesTags);
router.put('/blog/:slug', update);

router.get('/:username/blogs', listByUser);
router.delete('/user/blog/:slug', remove);
router.put('/user/blog/:slug', update);

module.exports = router;
