const {Schema,model}=require("mongoose")
const UserSchema=new Schema({
    email:{type:String,require:true},
    password:{type:String,require:true}
},

{
    versionKey:false,
    timestamps:true
}
)

const UserModel=model("user",UserSchema);
module.exports=UserModel;