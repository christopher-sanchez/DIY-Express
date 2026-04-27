import express from 'express';
import { categories, getNextId } from '../data/storage.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.json(categories);
});

router.post('/',(req,res)=>{
    const {name} = req.body;
    const newCategory = {
        id: getNextId(categories),
        name
    };
    categories.push(newCategory);
    res.status(201).json(newCategory);

});
export default router;