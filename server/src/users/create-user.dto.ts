export class CreateUserDto {
    name: string;
    pass: number;
    phone: string;
    email: string;
    cpf: number;

    constructor(name: string, pass: number, phone: string, email: string, cpf: number){
        this.name = name.length > 5 ? name : '0';
        this.pass = pass > 999 ? pass : 0;
        this.phone = phone.length > 7 ? phone : '0';
        this.cpf = this.validateCpf(cpf) ? cpf : 0;
    }
    
    
    async validateCpf(cpfParam) {
        
            let i = 0; // index de iteracao
            let somatoria = 0;
            let cpf = cpfParam.toString().split("");
            let dv11 = cpf[cpf.length - 2]; // mais significativo
            let dv12 = cpf[cpf.length - 1]; // menos significativo
            cpf.splice(cpf.length - 2, 2); // remove os digitos verificadores originais
            for(i = 0; i < cpf.length; i++) {
              somatoria += cpf[i] * (10 - i);
            }
            let dv21 = (somatoria % 11 < 2) ? 0 : (11 - (somatoria % 11));
            cpf.push(dv21);
            somatoria = 0;
            for(i = 0; i < cpf.length; i++) {
              somatoria += cpf[i] * (11 - i);
            }
            let dv22 = (somatoria % 11 < 2) ? 0 : (11 - (somatoria % 11));
        
            if (dv11 == dv21 && dv12 == dv22) {
              return true
            } else {
              return false
            }
        }
    
    }

  

  