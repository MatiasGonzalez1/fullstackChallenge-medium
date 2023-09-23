import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getAllPosts = async (req, res)=>{
  try{
    const response = await prisma.post.findMany({});
    if(response.length === 0){
      return res.send({message:'There are no posts currently'})
    }else{
    return res.send({status:200, count: response.length, data:response})
    };
  }catch(e){
    res.status(500).send({error: '500'})
  }
}

const getPostsByUser = async (req, res)=>{
  try{
    const response = await prisma.post.findMany({
      where:{
        authorId : req.decoded.id
      }
    });
    if(response.length === 0){
      return res.send({message:'There are no posts currently'})
    }else{
    return res.send({status:200, count: response.length, data:response})
    };
  }catch(e){
    res.status(500).send({error: '500'})
  }
}

const createPost = async (req, res) => {
    try {
      const {authorId, title, content} = req.body
      const Post = await prisma.post.create({
        data:{
          authorId: req.decoded.id,
          title,
          content
        }
      });
      res.send({status: 200, data:Post})
    } catch (error) {
      res.status(500).send({error: '500'})
    }  
}


const getOnePost = async(req, res)=>{
  try{
      const id = req.params.id
      const getOne = await prisma.post.findUnique({
      where:{
        id:id
      }
    });
    
    if(!getOne){
      return res.send({status: 404, message:"Post don't found"})
     }

    res.send({status:200, data:getOne})
  }
  catch(error){
    res.status(500).send({error: 'Something went wrong'})
  }
}

const updatePost = async(req, res)=>{
  try {
    const id = req.params.id
    const {title, content} = req.body
    const updateOne = await prisma.post.update({
      where:{
        id:id
      },
      data:{
        title,
        content
      }
    });

    if(
      !req.body.content  | !req.body.title
    ){
       res.status(403).send({status:403, data: {error: "Title and content cannot be empty"}})
    }else if(!updateOne){
       res.send({status: 404, message:"Post don't found"})
     }else{
      res.send({status:200, message:"updated post", data:updateOne})
    }
  }
   catch (error) {
    res.status(500).send({error: 500})
  }
}

const deletePost = async(req, res)=>{
  try {
    const id = req.params.id
    const deleteOne = await prisma.post.delete({
    where:{
      id:id
    }
  });
   return res.status(204).send({status:"success", postDeleted:deleteOne})
  }
   catch (error) {
    res.status(500).send({error: '500 Internal Server Error'})  
  }
}

export {createPost, getAllPosts, updatePost, deletePost, getOnePost, getPostsByUser}