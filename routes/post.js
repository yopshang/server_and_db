const express = require('express');
const router = express.Router();
const app = express();

const getdata =  require('../getdata');
const postdata = require('../postdata');
const {deletedata, deleteAllData} = require('../deletedata');
const patchdata = require('../patchdata');

async function returnBody(req){
    let body = "";

    await req.on('data', chunk=>{
        body+=chunk;
    })
    return body;
}

router.get('/', (req, res) => {
    getdata(res);
})
router.post('/', async (req, res) => {
    postdata(req, res);
})
router.delete('/:id', async (req, res) => {
    deletedata(req, res);
})
router.delete('/', async (req, res) => {
    deleteAllData(req, res);
})
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    patchdata(req, res, id );
})
router.options('/', async(req,res) => {
    res.status(200).json({'status': 'success'})
})

module.exports = router;