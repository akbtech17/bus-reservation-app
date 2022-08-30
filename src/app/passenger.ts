export class Passenger {
    PId: number 
    TId: number
    PName: string
    Age: number
    Adhar: string
    Gender: string

    constructor(pid: number, tid:number, pname:string, age:number, adhar:string, gender:string) {
        this.PId = pid
        this.TId = tid
        this.Age = age
        this.Adhar = adhar
        this.Gender = gender
        this.PName = pname
    }
}
