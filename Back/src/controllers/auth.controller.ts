import { Request, Response } from "express"
import HttpStatus from 'http-status';

const login = async (req: Request, res: Response)=>{
  try{
    const response = 'Logueate'
      if(response.length === 0){
      return res.send({message:'There are no artists currently'})
    }else{
      return res.status(HttpStatus.OK).json({data: response})
    };
  }catch(e){
    res.status(500).send({error: '500'})
  }
}

const logOut = async(req: Request, res: Response)=>{
  try{
    const response = 'Fin'
    if(response.length === 0){
      return res.send({message:'There are no artists currently'})
    }else{
      return res.status(HttpStatus.OK).json({data: response})
    };
  }catch(e){
    res.status(500).send({error: '500'})
  }
}

export {login, logOut}