import { Passenger } from "./passenger.js";

export class StudentPassenger extends Passenger {
    constructor(ownerName, id, price,School) {
        super(ownerName, id, price );
        this.School = School;
    }
    studentBuyorginal(flight) {
        if ((flight.regularTicketPrice*0.9) <= this.price ) {
            const index = flight.listCard.findIndex((element) => {
                return (element instanceof RegularTicket && element.ownerName === null)
            })
            if (index !== -1) {
                flight.ownerName = this.ownerName
                this.price -= (flight.regularTicketPrice * 0.9)
                return true
            }
        }
        return false
    }
        studentBuyvip(flight) {
        if (flight.regularTicketPrice <= this.price ) {
            const index = flight.listCard.findIndex((element) => {
                return (element instanceof ticketVip && element.ownerName === null)
            })
            if (index !== -1) {
                flight.ownerName = this.ownerName
                this.price -= flight.regularTicketPrice 
                return true
            }
        }
        return false
    }

}


