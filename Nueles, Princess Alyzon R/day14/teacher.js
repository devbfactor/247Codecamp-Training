//Inheritance
import {Person} from './person';

export function promote() {}

export class Teacher extends Person{
    constructor(namee,degree) {
        super(namee)
        this.degree = degree
    }
    teach(){
        console.log('teach')
    }
}


