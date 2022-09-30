export declare class CreateUserDto {
    name: string;
    pass: number;
    phone: string;
    email: string;
    cpf: number;
    constructor(name: string, pass: number, phone: string, email: string, cpf: number);
    validateCpf(cpfParam: any): Promise<boolean>;
}
