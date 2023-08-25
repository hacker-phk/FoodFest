const mongoose=require('mongoose');
const pizzaSchema=mongoose.Schema({
    name:{type:String,require},
    variants:[],
    prices:[],
    category:{type:String,require},
    images:{type:String,require},
    description:{type:String,require},
},
{timestamp:true})
const pizzaModal=mongoose.model("pizzas",pizzaSchema);
module.exports=pizzaModal;