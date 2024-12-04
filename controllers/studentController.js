import Student from "../models/studentModel.js"


//create
export const createStudent = async(req, res) => {
    try {
     const { idCard,name,email,phone,classId } = req.body;
     const eventData = new Student({ 
        idCard,
        name,
        email,
        phone,
        classId,});
 
     await eventData.save();
     if (!idCard || !name || !email || !phone || !classId ){
       return res.status(400).json({ message: "All required field"});
         
     }
    
     res.status(201).json({ message: "Student create successfully" , studentData});
    } catch (error){
     res.status(500).json({ message: "Error create student" });
    }
 };



//get
export const getAllStudent = async(req, res) => {
    try {
      const students = await Studetn.find();
      return res.status(200).json({ message: "Get all student successfully", students});
    }catch(error){
      res.status(500).json({ message: "Error get all student" });
    }
  };

//get Id
 export const getStudentId = async(req, res) => {
    try{
      const studentId = req.params.id
      const studented = await Student.findById(studentId);
      return res.status(200).json({ message: "Get by id successfully", studented});
    } catch {
      res.status(500).json({message: "Error get by id "});
    }
  };

//update
 export const updateStudent = async(req,res) => {
    try {
      const studentId = req.params.id;
      const studentData = req.body;
      const studentUpdate = await Event.findByIdAndUpdate(
        studentId,
        studentData,
        { new: true}
      );
      if(!studentUpdate){
        return res.status(404).json({ message: "data not found"});
      }
      return res.status(200).json({ message: "update successfully",studentUpdate});
  
    }catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
  }
  } 


  //delete
 export const deleteStudent = async(req,res) => {
    try {
      const studentId = req.params.id;
      const studentDelete = await Event.findByIdAndDelete(studentId);
      return res.status(200).json({message: "Delete successfully", studentDelete})
    }catch(error){
      console.log(error);
      return res.status(500).json({ message: "Error delete data" });
    }
  }
  
  
  