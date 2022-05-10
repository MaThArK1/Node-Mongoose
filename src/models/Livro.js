import mongoose from "mongoose";

//schema do livro no banco
const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: String, required: true},
        editora: {type: String, required: true},
        numeroPaginas: {type:Number}
    }
)

//nome do banco.
const livros= mongoose.model('livros', livroSchema);

export default livros;