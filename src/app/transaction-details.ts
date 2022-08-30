import { Ipassenger } from "./ipassenger"
import { Passenger } from "./passenger"

export class TransactionDetails {
    public static customerId: number
    public static busId: number
    public static seatCount: number
    public static seats: string[]
    public static passengers: Passenger[]
}
