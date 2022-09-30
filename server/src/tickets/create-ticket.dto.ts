export class CreateTicketDto {
    user: string;
    lat: number;
    lng: number;
    name: string;
    email: string;
    phone: string

    constructor(name: string, pass: number, phone: string, email: string){
        this.name = name.length > 5 ? name : '0';
        this.phone = phone.length > 7 ? phone : '0';
    }
    
  }
  

  