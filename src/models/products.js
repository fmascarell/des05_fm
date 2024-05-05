import {Schema, model} from 'mongoose';

const nameCollection = 'Producto';

const ProductoSchema = new Schema({
    title: {type: String, required:[true, 'El título del producto es obligatorio']},
    description: {type: String, required:[true, 'La descripción del producto es obligatorio']},
    code: {type: String, required:[true, 'El código del producto es obligatorio'], unique: true},
    price: {type: Number, required:[true, 'El precio del producto es obligatorio']},
    status: {type: Boolean, default: true},
    stock: {type: Number, required:[true, 'El stock del producto es obligatorio']},
    category: {type: String, required:[true, 'La categoría del producto es obligatorio']},
    thumbnails: [{type: String}],
});

export const productModel = model(nameCollection, ProductoSchema);