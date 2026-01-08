import { Airport } from "./models/airport.js";
import { ordinaryPassenger } from "./models/OrdinaryPassenger.js";
import { StudentPassenger } from "./models/StudentPassenger.js";

const airport = new Airport('israel');

const defultPassenger = new ordinaryPassenger("haim",1234,2000,"abcd",false)
const studentPassenger = new StudentPassenger("dan",12345678,2000,"adsh")




