import { check, validationResult } from "express-validator";

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import * as bcrypt from "bcrypt"


export const validateLoginUser = [
check("password")
  .trim()
  .notEmpty()
  .withMessage("The password field cannot be empty")
  .isLength({ min: 8 })
  .withMessage("The password must have at least 8 characters")
  .matches(/^(?=.*[0-9])(?=.*[!@#$_.^&*])[a-zA-Z0-9!@#$_.^&*]{8,16}$/)
  .withMessage("The password must have a number, a capital letter and a special character")
  .custom( async (value, {req})=>{
  let users = await prisma.user.findUnique({
      where: {email: req.body.email}
  })
  if(users == undefined){
      throw new Error("Error, you must first enter a valid user");
  }
  let secure = await bcrypt.compare(req.body.password, users.password) 
  if(!secure){
      throw new Error("Wrong password error");
             }
          return true;
  }),
    check('email')
    .exists().withMessage('email is required')
    .trim().not().isEmpty().withMessage('email is empty')
    .isEmail()
    .withMessage("You must enter a valid email")
    .custom( async (value, {req})=>{
      let users = await prisma.user.findUnique({
          where: {email: req.body.email}
      })
      if(!users){
       throw new Error("Email not exists");
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