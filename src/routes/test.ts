import express from 'express';
const router = express.Router();

/**
* 
* @param
*
* @return
*/ 
router.post('/test', async function(req: any, res: any) {
  try {
console.log(req.body);
    let body: any = {};
    if(req.body) {
      body = req.body;
      body.resulte_code = 200;
    }
    res.json(body);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

/**
* 
* @param
*
* @return
*/ 
router.post('/test1', async function(req: any, res: any) {
  try {
console.log(req.body);
    res.json({});
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});


export default router;
