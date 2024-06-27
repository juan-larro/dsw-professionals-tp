import crypto from 'node:crypto'  //DEFINICION CLASE PROFESSIONAL

export class Professional{
    constructor(
        public dni: string,
        public lastname: string,
        public name: string,
        public adress: string, 
        public phone_number: string,
        public mail: string,
        public birthdate: string,
        public id?: number,
     ) {}
}