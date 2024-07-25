//agregar tarjeta
//obtener una tarjeta
//obtener targetas
import CardModel from "../models/CardModel.js"


class ManagerCard {
    constructor(
        userId,
        accountId,
        cardNumber,
        cardType,
        expirationDate,
        securityCode,
        status
    ) {
        this.userId = userId;
        this.accountId = accountId;
        this.cardNumber = cardNumber;
        this.cardType = cardType;
        this.expirationDate = expirationDate;
        this.securityCode = securityCode;
        this.status = status;
    }

    async createCard() {
        try {
            await CardModel.create({
                thisuserId:this.userId,
                thisaccountId:this.accountId,
                thiscardNumber:this.cardNumber,
                thiscardType:this.cardType,
                thisexpirationDate:this.expirationDate,
                thissecurityCode:this.securityCode,
                thisstatus:this.status,
            })
            return "ok";
        } catch (error) {
            throw new Error(`Error al crear cuenta:${error}`);
        }

    }

    async getCards(){
        try {
            const cards = await CardModel.find();
            return cards;
        } catch (error) {
            throw new Error(`Error al obtener cuentas:${error}`)
        }
        
    }

    async getCard(id){
        try {
            const card = await CardModel.findById(id);
            return card;
        } catch (error) {
            throw new Error(`Error al obtener cuenta:${error}`)
        }
    }

}

export default ManagerCard;