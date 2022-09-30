import { NlpService } from 'src/nlp/nlp.service';
import { Whatsapp, WhatsappProfile } from 'venom-bot';
import { CreateConfig } from 'venom-bot/dist/config/create-config';
export declare class VenomService {
    nlp: NlpService;
    client: Whatsapp;
    chromiumArgs: string[];
    config: CreateConfig;
    constructor();
    setClient: (client: Whatsapp) => void;
    start: () => Promise<void>;
    userVerify(phone: string): Promise<WhatsappProfile>;
    sendMessage: (phone: string, message: string) => Promise<void>;
    chat(message: any): Promise<void>;
}
