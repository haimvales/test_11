import { Passenger } from "./passenger.js";

export class ordinaryPassenger extends Passenger {
    constructor(ownerName, id, price, Workplace, knowsAnAirport) {
        super(ownerName, id, price);
        this.Workplace = Workplace;
        this.knowsAnAirport = knowsAnAirport;
    }

    ordinaryBuyVip(flight) {
        if (!this.knowsAnAirport) {
            if (flight.vipTicketPrice <= this.price) {
                const index = flight.listCard.findIndex((element) => {
                    return (element instanceof ticketVip && element.ownerName === null)
                })
                if (index !== -1) {
                    flight.ownerName = this.ownerName
                    this.price -= flight.vipTicketPrice
                    return true
                }
            }

        } else {
            if ((flight.vipTicketPrice * 0.85) <= this.price) {
                const index = flight.listCard.findIndex((element) => {
                    return (element instanceof ticketVip && element.ownerName === null)
                })
                if (index !== -1) {
                    flight.ownerName = this.ownerName
                    this.price -= (flight.regularTicketPrice * 0.85)
                    return true
                }
            }
        }
        return false
    }

    ordinaryBuyRegular(flight) {
        if (!this.knowsAnAirport) {
            if (flight.regularTicketPrice <= this.price) {
                const index = flight.listCard.findIndex((element) => {
                    return (element instanceof RegularTicket && element.ownerName === null)
                })
                if (index !== -1) {
                    flight.ownerName = this.ownerName
                    this.price -= flight.regularTicketPrice
                    return true
                }
            }

        } else {
            if ((flight.regularTicketPrice * 0.8) <= this.price) {
                const index = flight.listCard.findIndex((element) => {
                    return (element instanceof RegularTicket && element.ownerName === null)
                })
                if (index !== -1) {
                    flight.ownerName = this.ownerName
                    this.price -= (flight.regularTicketPrice * 0.8)
                    return true
                }
            }
        }
        return false
    }
}


