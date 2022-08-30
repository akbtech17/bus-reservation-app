import { Ipassenger } from "./ipassenger"
import { Passenger } from "./passenger"

export class TransactionDetails {
    public static cId: number
    public static busId: number
    public static seatCount: number
    public static seats: string[]
    public static passengers: Passenger[]
}
