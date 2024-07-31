//registrar usuario
//iniciar secion
//cerrar secion
//info usuario
//crear transacciones
//pedir prestamos
//borrar cuenta
//actualizar

import Account from "../models/AccountModel";
import UserModel from "../models/UserModel";
import ManagerAccount from "./AccountClass";
import ManagerCard from "./CardClass.js";


class ManagerUser{
    constructor(name,email,lastName,phone, isInSession, isAdmin,password){
        this.name=name;
        this.email=email;
        this.lastName=lastName;
        this.phone=phone;
        this.isInSession=isInSession;
        this.isAdmin=isAdmin;
        this.password=password;
    }

    async register(){
        try {
            const user = await UserModel.create({
                name:this.name,
                email:this.email,
                lastName:this.lastName,
                phone:this.phone,
                isInSession:this.isInSession,
                isAdmin:this.isAdmin,
                password:this.password,
            });
            const MA = new ManagerAccount(user._id, 12345, "ahorro",10000);
            const currentAccount = await MA.createAccount();
            const MC = new ManagerCard(user._id,currentAccount._id, "16 digitos al azar","debito","fecha de expiracion","generar codigo de 3 cifras","active",);
            await MC.createCard();
            return user;
        } catch (error) {
            throw new Error(`Error al registrar:${error}`);
        }

    }

    async Login(email,password){
        try {
            const user = await UserModel.findOne({email: email});
            if(!user){
                throw new Error("Usuario no registrado")
            }
            if(user.password !== password){
                throw new Error("contra incorrecta")
            }

            return "Succeeded"; 
        } catch (error) {
            throw new Error(`Error al logear:${error}`);
        }
    }

    async getUserInfo(id){
        try {
            const user = await UserModel.findById(id);
            return user;
        } catch (error) {
            throw new Error(`Error encontrar info del user:${error}`);
        }
    }

    async updateEmail(email){
        try {
            if(!email){
                throw new Error(`Error no existe el email`);
            }
            await UserModel.findById(id,{
                $set:{email}
            });
            return "ok"
        } catch (error) {
            throw new Error(`Error al actualizar correo:${error}`);
        }
    }

    async updatePhone(id,phone){
        try {
            if(!phone){
                throw new Error(`Error fono no existe`);
            }
            await UserModel.findById(id,{
                $set:{phone}
            });
            return "ok"
        } catch (error) {
            throw new Error(`Error al actualizar fono:${error}`);
        }
    }

    async updatePassword(id,password){
        try {
            if(!password){
                throw new Error(`Error contra incorrecta`);
            }
            await UserModel.findById(id,{
                $set:{password}
            });
            return "ok"
        } catch (error) {
            throw new Error(`Error al actualizar pasword:${error}`);
        }
    }

    //usuario pendiente eliminar

}

export default ManagerUser;