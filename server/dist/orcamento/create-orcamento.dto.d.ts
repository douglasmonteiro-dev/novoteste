export declare class CreateOrcamentoDto {
    userId: string;
    agendaId: string;
    servicoId: string;
    data: Date;
    hora: string;
    minutos: string;
    servico: string;
    nome: string;
    profissional: string;
    tempoAtendimento: string;
    pagamento: boolean;
    confirmado: boolean;
    constructor(userId: string, servico: string, inicio: Date, fim: Date);
}
