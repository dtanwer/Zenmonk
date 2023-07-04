import express from 'express'
const router=express.Router();



router.get('/string',(req,res)=>{
    res.status(200).send('This is String responce');
})
router.get('/check',(req,res)=>{
    console.log(req);
    return res.status(200).send(req.body);
})
router.get('/boolean',(req,res)=>{
    res.status(200).send(false);
})
router.get('/json', (req,res)=>{
    res.status(200).send({'name':"Deepak"})
})


router.get('/:as/:name/:phone', (req,res)=>{

    console.log(req.body);

    try {
        const id= req.params.as;
        const name = req.params.name;
        const number= req.params.phone;
        if(id=="11")
        {
            return res.status(200).send(`the responce Id is ${id} ${name} ${number}`);
        }
        throw(err);
    } catch(err) {
        res.statusMessage="id did not match"; 
        return res.status(204).end();
    }
    
    
    
})


export {router as apiCheckRouter}
