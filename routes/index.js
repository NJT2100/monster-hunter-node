const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render(appRoot + '/views/index.ejs', {
        title: 'Monster Hunter Wiki', 
        message: 'Welcome to the Monter Hunter Wiki',
        poppages: ['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item'],
        featuredImages: ['featured_1.png', 'featured_2.jpg', 'featured_3.jpg', 'featured_4.jpg'],
    });
});

module.exports = router;