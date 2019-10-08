//la classe admin  
export class Batt {
    photo: string;
    synopsis: string;
    
    constructor( public name:string,
                public capacite: string,
                public tension:string,
                public dimension: string,
                public description: string,
                public price: number    ) {
    }
  }