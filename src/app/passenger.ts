export class Passenger {
    PId: number 
    TId: number
    PName: string
    Age: number
    Adhaar: string
    Gender: string

    constructor(pid: number, tid:number, pname:string, age:number, adhaar:string, gender:string) {
        this.PId = pid
        this.TId = tid
        this.Age = age
        this.Adhaar = adhaar
        this.Gender = gender
        this.PName = pname
    }
}
