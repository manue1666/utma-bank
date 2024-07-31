//dineros movimiento
//obtener transacciones
//obtener transacciones por user

import TransactionModel from "../models/TransactionModel";

class ManagerTransaction{
    constructor(accountFromId, accountToId, amount, description){
        this.accountFromId=accountFromId;
        this.accountToId=accountToId;
        this.type=type;
        this.amount=amount;
        this.description=description;
    }

    async createTransaction(){
        try {
            const transaction = TransactionModel.create({
                accountFromId:this.accountFromId,
                accountToId:this.accountToId,
                type:this.type,
                amount:this.amount,
                description:this.description,
            })
        } catch (error) {
            throw new Error(`Error al crear la transaction:${error}`);
        }
    }

    async getTransaction(id){
        try {
            const transaction = await TransactionModel.findById(id);
            return transaction;
        } catch (error) {
            throw new Error(`Error al obtener la transaction:${error}`);
        }
    }

    async getTransactions(){
        try {
            const transaction = await TransactionModel.find();
            return transaction;
        } catch (error) {
            throw new Error(`Error al obtener la transaction:${error}`);
        }
    }

    async getAccountTransaction(accountFromId){
        try {
            const transaction = await TransactionModel.find({accountFromId:id});
            return transaction;
        } catch (error) {
            throw new Error(`Error al obtener la transaction:${error}`);
        }
    }
}

export default ManagerTransaction;