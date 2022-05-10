import mongoose from "mongoose";

//mongoose.connect("mongodb://127.0.0.1:27017/alura-node"); caso fosse conexão local
mongoose.connect("mongodb+srv://matheus_barucho:Matharkdoge25122001@cluster0.tfgfb.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;