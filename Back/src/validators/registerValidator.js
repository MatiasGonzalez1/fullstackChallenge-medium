import { check, validationResult } from "express-validator";

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const validateCreateUser = [
  check('firstName')
  .exists().withMessage('first name is required')
  .trim().isLength({min:3}).withMessage('The name must have at least 3 characters')
  .not().isEmpty().withMessage('first name is empty')
  ,
  check("lastName")
  .exists().withMessage('last name is required')
  .trim().isLength({min:3}).withMessage('The name must have at least 3 characters')
  .not().isEmpty().withMessage('last name is empty')
  ,
  check('password')
  .exists().withMessage('password is required')
  .trim().isLength({min:8}).withMessage('The name must have at least 8 characters')
  .not().isEmpty().withMessage('password is empty'),
  check('email')
  .exists().withMessage('email is required')
  .trim().not().isEmpty().withMessage('email is empty')
  .isEmail()
  .withMessage("You must enter a valid email")
  .custom( async (value, {req})=>{
    let users = await prisma.user.findUnique({
        where: {email: req.body.email}
    })
    if(users){
     throw new Error("Email currently in use");
      }
      return true;
    }),
  (req, res, next)=>{
    try{
      validationResult(req).throw()
      return next()
    } catch (error){
      res.status(403)
      res.send({errors: error.array()})
    }
  }
];

