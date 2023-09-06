import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import * as bcrypt from "bcrypt"
import { createToken } from '../libs/jwt.js'

const createUser = async (req, res) => {
    try {
      const saltRounds = 10;
      const plainPassword = req.body.password;
      const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

      const User = await prisma.user.create({
        data: {...req.body, password:hashedPassword}
      });

      const token = await createToken({id:User.id})

      res.cookie('token', token)
      res.json({status: 200, message: "User created successfully", data:User})
    } catch (error) {
      res.status(500).send({message: error.message})
    }  
}

const loginUser = async (req, res) => {
  try {
    const email = req.body.email
    const passwordEntered = req.body.password
    const User = await prisma.user.findUnique({
      where:{
        email:email
      }
    })

    if(!User) return res.status(400).json({message: 'User not found'})

    const isMatch = await bcrypt.compare(passwordEntered, User.password);
    if(!isMatch) return res.status(400).json({message: 'Password incorrect'})

    const token = await createToken({id:User.id})

    res.cookie("token", token)
    res.json({status: 200, message: "User loged successfully", data:User})
  } catch (error) {
    res.status(500).send({message: error.message})
  }  
}


const logout = (req, res)=>{
  res.cookie("token", "", {
    expire: new Date(0)
  })
  return res.status(200).json({message:'See you later buddy'})
}

const profile = async (req, res)=>{
  const userFound = await prisma.user.findUnique({
    where:{
      id:req.decoded.id,
    }
  })

  if(!userFound) return res.status(400).json({message: "User not found"})

  return res.json({
   id: userFound.id,
   email: userFound.email,
   firstName: userFound.firstName,
   lastName: userFound.lastName
  })
}

export {createUser, loginUser, logout, profile}