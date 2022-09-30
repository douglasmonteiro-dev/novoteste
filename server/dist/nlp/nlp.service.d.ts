import { Nlp } from '@nlpjs/nlp';
export declare class NlpService {
    nlp: Nlp;
    constructor();
    receiveMessage: (lang: string, text: string) => Promise<any>;
}
