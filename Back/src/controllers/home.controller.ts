import { Request, Response } from "express"
import HttpStatus from 'http-status';

const home = async (req: Request, res: Response)=>{
  try{
    const response = 'Home'
    return res.status(HttpStatus.OK).json({data: response})
  }catch(e){
    res.status(500).send({error: '500'})
  }
}

export {home}