const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('GET router reached')
        const queryText = `SELECT * FROM item;`;
        pool.query(queryText).then((result)=> {
            console.log('shelf GET success', result)
            res.send(result.rows)
        }).catch((err)=>{
            console.log('ERROR shelf GET route', err)
            res.sendStatus(500);
        });
    }
    else {
        res.sendStatus(403); 
    }
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {

});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    if(req.isAuthenticated()) {
        console.log('in DELETE /api/shelf', req.params.id);
        const queryText = `DELETE FROM item WHERE id = $1`; 
        pool.query(queryText, [req.params.id])
        .then((result)=> {
            console.log('success DELETE /api/shelf')
            res.sendStatus(200);
        }).catch((err)=>{
            console.log('ERROR DELETE /api/shelf', err)
            res.sendStatus(500);
        });
    }
    else {
        res.sendStatus(403); 
    }
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;