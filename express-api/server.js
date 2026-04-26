import express from 'express';
import logger from './middleware/logger.js';
import {notFound, errorHandle} from 
'./middleware/errorHandler.js';
import tasksRouter from './routes/tasks.js';
import categoriesRouter from './routes/categories.js';
import { categories } from './data/storage';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(logger);

app.get('/',(req, res) => {
    res.json({
        message: 'Task Management API',
        endpoints: {tasks: '/api/tasks', categories:
            '/api/categories' }
    });
});

app.use('/api.tasks', tasksRouter);
app.use('/api/categories', categoriesRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log('Server running at http://localhost:${PORT}');
});