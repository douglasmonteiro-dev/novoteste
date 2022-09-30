"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenomService = void 0;
const common_1 = require("@nestjs/common");
const nlp_service_1 = require("../nlp/nlp.service");
const venom_bot_1 = require("venom-bot");
let VenomService = class VenomService {
    constructor() {
        this.nlp = new nlp_service_1.NlpService();
        this.chromiumArgs = [
            '--disable-web-security', '--no-sandbox', '--disable-web-security',
            '--aggressive-cache-discard', '--disable-cache', '--disable-application-cache',
            '--disable-offline-load-stale-cache', '--disk-cache-size=0',
            '--disable-background-networking', '--disable-default-apps', '--disable-extensions',
            '--disable-sync', '--disable-translate', '--hide-scrollbars', '--metrics-recording-only',
            '--mute-audio', '--no-first-run', '--safebrowsing-disable-auto-update',
            '--ignore-certificate-errors', '--ignore-ssl-errors', '--ignore-certificate-errors-spki-list'
        ];
        this.config = {
            disableWelcome: true,
            folderNameToken: 'tokens',
            mkdirFolderToken: 'tokens',
            autoClose: 60000,
            multidevice: false,
            disableSpins: true,
            useChrome: false,
            browserArgs: this.chromiumArgs,
            logQR: true,
            updatesLog: false
        };
        this.setClient = (client) => {
            this.client = client;
        };
        this.start = async () => {
            await (0, venom_bot_1.create)('Bot', (base64Qrimg, asciiQR, attempts, urlCode) => {
            }, (statusSession, session) => {
            }, this.config)
                .then((client) => {
                try {
                    this.setClient(client);
                }
                catch (error) {
                    client.close();
                }
                return client;
            }).then(async (client) => {
                try {
                    client.getAllChatsNewMsg().then(retorno => {
                        if (retorno.length) {
                            retorno.forEach((unread) => {
                                client.getAllMessagesInChat(unread.id._serialized, false, false).then((message) => {
                                    this.chat(message[message.length - 1]);
                                });
                            });
                        }
                    });
                }
                catch (error) {
                    console.log('***ERRO', error);
                    client.close();
                }
                return client;
            }).then((client) => {
                try {
                    client.onMessage((retorno) => {
                        this.chat(retorno);
                    });
                }
                catch (error) {
                    client.close();
                }
            })
                .catch((erro) => console.log(erro));
        };
        this.sendMessage = async (phone, message) => {
            if (phone) {
                if (this.client !== undefined) {
                    await this.client.sendText(`55${phone}@c.us`, `${message}`);
                }
                else {
                    await (0, venom_bot_1.create)('Lis', () => { }, () => { }, this.config)
                        .then((client) => {
                        this.setClient(client);
                        return client;
                    }).then((client) => {
                        client.sendText(`55${phone}@c.us`, `${message}`);
                    });
                }
            }
            else {
                console.log("ERRO: ", phone, message);
            }
        };
        this.start();
    }
    userVerify(phone) {
        if (phone) {
            if (this.client !== undefined) {
                return this.client.checkNumberStatus(`55${phone}@c.us`);
            }
            else {
                (0, venom_bot_1.create)('Lis', () => { }, () => { }, this.config)
                    .then((client) => {
                    this.setClient(client);
                    return client;
                }).then((client) => {
                    return client.checkNumberStatus(`55${phone}@c.us`);
                });
            }
        }
    }
    async chat(message) {
        if (!message.isGroupMsg) {
            if (message.body) {
                this.client.sendSeen(message.chatId);
                this.nlp.receiveMessage('pt', message.body).then((response) => {
                    console.log('response NLP: ', response);
                    if (response.intent === 'user.testing') {
                        this.client.sendText(message.from, response.answer).then((result) => {
                            console.log(`## Mensagem ${response.answer} enviada para ${message.from} result ${JSON.stringify(result)}`);
                        }).catch((e) => {
                            console.log(e);
                        });
                    }
                    else {
                        this.client
                            .reply(message.from, response.answer, message.id)
                            .then((result) => {
                            console.log(`Mensagem ${response.answer} enviada para ${message.from} result ${JSON.stringify(result)}`);
                        })
                            .catch((erro) => {
                            console.error('Error when sending: ', erro);
                        });
                    }
                });
            }
        }
    }
};
VenomService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], VenomService);
exports.VenomService = VenomService;
//# sourceMappingURL=venom.service.js.map