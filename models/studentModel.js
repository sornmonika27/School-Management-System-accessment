import mongoose from "mongoose"
const {Schema,model} = mongoose;
const studentSchema = new Schema(
  {
    idCard: {type: Number, required: true},
    name: {type: String, required: true },
    email: {type: String},
    phone: {type: Number},
    classId:{type:mongoose.Schema.Types.ObjectId,ref: "class"},
  },
  {
    timestamps: true,
  }
);

const Student = model("student", studentSchema);
export default Student;

