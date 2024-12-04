import express from "express";
import {createStudent,getAllStudent,getStudentId,updateStudent,deleteStudent} from "../controllers/studentController.js";
 const studentRoutes = express.Router();


 studentRoutes.post('/create', createStudent);
 studentRoutes.get('/getAll', getAllStudent);
 studentRoutes.get('/:id', getStudentId);
 studentRoutes.put('/update/:id', updateStudent);
 studentRoutes.delete('/delete/:id', deleteStudent);

export default studentRoutes;