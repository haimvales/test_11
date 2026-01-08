
import {nanoid} from 'nanoid';

import { Flight } from './flight.js';
import { RegularTicket } from './RegularTicket.js';
import { ticketVip } from './ticketVip.js';

export class Airport {
    constructor(name,numFly = 3) {
        this.numFly = numFly;
        this.name = name;
        this.ticketsList = []
        this.flyList = []
        this.createFly();
    }
    createFly() {
        for (let i = 0; i < this.numFly; i++) {
            const regularTicketPrice = 200
            const vipTicketPrice = 250
            const listCard = this.ticketsList
            const Maximum = Math.floor(Math.random() * 20)
            this.cards(Maximum,regularTicketPrice,vipTicketPrice);
            const elemnt = new Flight("name" + nanoid(4), this.name, Maximum, regularTicketPrice, vipTicketPrice, listCard)
            this.flyList.push(elemnt)
        }}
        cards(Maximum,regularTicketPrice,vipTicketPrice){
            const numRegular = Math.floor((Maximum * 0.9))
            const numVip = Maximum - numRegular
            for (let i = 0; i < numRegular; i++) {
                const elemnt = new RegularTicket(regularTicketPrice)
                this.ticketsList.push(elemnt)
            }
            for (let i = 0; i < numVip; i++) {
                const elemnt = new ticketVip(vipTicketPrice, i + 1)
                this.ticketsList.push(elemnt)
            }
        }
    }




