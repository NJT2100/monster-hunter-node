const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render(appRoot + '/views/index.ejs', {
        title: 'Monster Hunter Wiki', 
        message: 'Welcome to the Monter Hunter Wiki',
        poppages: ['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item'],
        featuredImages: ['featured_1.png', 'featured_2.jpg', 'featured_3.jpg', 'featured_4.jpg'],
        gameImages: [
            {'image':'mhw-iceborne.png', 'title':'Monster Hunter World: Iceborne'}, 
            {'image':'mhw.png', 'title':'Monster Hunter World'},
            {'image':'mhxx.png', 'title':'Monster Hunter Generations Ultimate'}],
        mainContentImages: [
            {'image':'1.png', 'text':'Weapons'},
            {'image':'2.png', 'text':'Armor'},
            {'image':'3.png', 'text':'Monsters'},
            {'image':'4.png', 'text':'Quests'},
            {'image':'5.png', 'text':'Items'},
            {'image':'6.png', 'text':'Locations'}],
    });
});

module.exports = router;