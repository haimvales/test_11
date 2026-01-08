import {nanoid} from 'nanoid';

import { Ticket } from "./ticket.js";

export class RegularTicket extends Ticket{
    constructor(price,ownerName=null){
        super(price,ownerName);
        this.randomTicketId = nanoid(4)
    }

}


