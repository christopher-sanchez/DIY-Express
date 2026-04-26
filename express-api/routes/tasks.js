import express from 'express';
import { tasks, getNextId, tasks } from '../data/storage';

const rounter = express.Router();

rounter.get('/', (req, res) => {
    const {completed} = req.query;

    if(completed !== undefined){
        const filtered = tasks.filter(t=>t.completed ===(completed === 'true'));
        return res.json(filtered);
    }
    res.json(tasks);
});

rounter.get('/:id',(req,res) => {
    const tasks = tasks.find(t => t.id === parseInt(req.params.id));
    if(!task){
        return res.status(404).json({error: 'Task not found'});
    }
    res.json(task);
});

rounter.post('/', (req,res)=> {
    const {title, categoryId} = req.body;
    const newTask = {
        id: getNextId(tasks), title, completed: false, categoryId:
        categoryId || 1
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
    });

    export default rounter;

rounter.put('/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    const { title, completed, categoryId } = req.body;

    tasks[index] = {
        ...tasks[index],
        title: title || tasks[index].title,
        completed: completed !== undefined ? completed : tasks[index].completed,
        categoryId: categoryId || tasks[index].categoryId
    };
    res.json(tasks[index]);
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    tasks.splice(index, 1);
    res.status(204).send();
});

