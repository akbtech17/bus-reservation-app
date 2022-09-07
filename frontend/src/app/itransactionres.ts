import { Ipassengerdet } from "./Customer/Models/ipassengerdet";

export interface Itransactionres {
    tId:number,

    busId:number,

    totalCost:number,

    customerId:number,

    dateofBooking:Date,

    seats:string[],

    passengers: Ipassengerdet[]

   

}
