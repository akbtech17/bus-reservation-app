import { Ipassenger } from "./ipassenger"

export interface ICreatetransactionrequest {
    tId: number
    busId: number
    totalCost: number
    customerId: number
    dateOfBooking: string
    seats: string[]
    passengers: Ipassenger[]
}
