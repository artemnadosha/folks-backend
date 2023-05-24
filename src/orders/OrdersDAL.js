import mongoose from 'mongoose';
import OrderDB from './OrdersModel.js';
import { getOrderDATA } from './utils.js';

const create = async order => {
    return OrderDB.create(order);
};

const findAll = async () => {
    return OrderDB.aggregate([...getOrderDATA]);
};

const findByID = async id => {
    const objectId = new mongoose.Types.ObjectId(id);
    console.log(objectId);
    return OrderDB.aggregate([
        {
            $match: { _id: objectId },
        },
        ...getOrderDATA,
    ]);
};

const update = async order => {
    return OrderDB.findByIdAndUpdate(order.id, order, { new: true });
};

const deleteOrder = async id => {
    return OrderDB.findByIdAndDelete(id);
};

export const OrderDAL = {
    create,
    findAll,
    findByID,
    update,
    deleteOrder,
};
