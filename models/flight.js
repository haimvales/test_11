import {nanoid} from 'nanoid';



export class Flight{
    constructor(flightName,Airline,Maximum,regularTicketPrice,vipTicketPrice,listCard){
        this.flightName = flightName;
        this.Airline = Airline;
        this.id = nanoid(8);
        this.Maximum = Maximum;
        this.regularTicketPrice = regularTicketPrice;
        this.vipTicketPrice = vipTicketPrice;
        this.listCard = listCard

    }

    }
















