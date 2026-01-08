import { Ticket } from "./ticket.js";

export class ticketVip extends Ticket{
    constructor(price,TicketId,ownerName=null){
        super(price,ownerName);
        this.ticketId = TicketId;
        this.benefits = ["Free alcohol","Free food","Hot towels"]
    }

}


