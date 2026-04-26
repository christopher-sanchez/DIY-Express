export const notFound = (req, res, next) =>{
    res.status(404).json({
        error:'Not Found',
        message: 'Route${req.originalUrl} does not exist'
    
    });
};

export const errorHandle = (err,req,res,next) =>{
    console.error('Error',err.message);
   res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && {
            stack: err.stack
        })
    });
};