import { Router } from "express";
import { createUserController } from "./useCases/User/CreateUser";

const router = Router();

router.post('/users/create',( request, response ) =>{
  return createUserController.handle( request, response );
})