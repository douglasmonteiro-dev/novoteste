import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { NlpService } from 'src/nlp/nlp.service';
import { create, Whatsapp, WhatsappProfile } from 'venom-bot';
import { CreateConfig } from 'venom-bot/dist/config/create-config';


@Injectable()
export class VenomService {
  nlp = new NlpService()
  client: Whatsapp;
  chromiumArgs = [
    '--disable-web-security', '--no-sandbox', '--disable-web-security',
    '--aggressive-cache-discard', '--disable-cache', '--disable-application-cache',
    '--disable-offline-load-stale-cache', '--disk-cache-size=0',
    '--disable-background-networking', '--disable-default-apps', '--disable-extensions',
    '--disable-sync', '--disable-translate', '--hide-scrollbars', '--metrics-recording-only',
    '--mute-audio', '--no-first-run', '--safebrowsing-disable-auto-update',
    '--ignore-certificate-errors', '--ignore-ssl-errors', '--ignore-certificate-errors-spki-list'
  ];
  config: CreateConfig = {
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
  constructor() {
    this.start();
  }
  setClient = (client: Whatsapp) => {
    this.client = client;
  }
  start = async () => {
  await create('Bot', (base64Qrimg, asciiQR, attempts, urlCode) => {
      // console.log('Number of attempts to read the qrcode: ', attempts);
      // console.log('Terminal qrcode: ', asciiQR);
      // console.log('base64 image string qrcode: ', base64Qrimg);
      // console.log('urlCode (data-ref): ', urlCode);
     }, (statusSession, session) => {
      // console.log('Status Session: ', statusSession);
      // console.log('Session name: ', session);
      }, this.config)
      .then((client) => {
        try {
          this.setClient(client);
        } catch (error) {
          client.close()
        }
        return client
      }).then(async (client) => {
        try {
          client.getAllChatsNewMsg().then(retorno => {
            if (retorno.length) {
              retorno.forEach((unread)=>{
                client.getAllMessagesInChat(unread.id._serialized, false, false).then((message) => {
                  this.chat(message[message.length-1])
                })
              })
            }
          })         
        } catch (error) {
          console.log('***ERRO', error)
          client.close()
        }
        return client
      }).then((client) => {
        try {
          client.onMessage((retorno) => {
            this.chat(retorno)
          });
          
        } catch (error) {
          client.close()
        }
      })
      .catch((erro) => console.log(erro))
  }
  userVerify (phone: string) : Promise<WhatsappProfile> {
    if (phone) {
      if (this.client !== undefined) {
        return this.client.checkNumberStatus(`55${phone}@c.us`)
      } else {
        create('Lis', () => { }, () => { }, this.config)
          .then((client) => {
            this.setClient(client);
            return client;
          }).then((client) => {
            return client.checkNumberStatus(`55${phone}@c.us`)
          });

      }
    }
  }
  sendMessage = async (phone: string, message: string) => {
    if (phone) {
      if (this.client !== undefined) {
        await this.client.sendText(`55${phone}@c.us`, `${message}`)
      } else {
        await create('Lis', () => { }, () => { }, this.config)
          .then((client) => {
            this.setClient(client)
            return client;
          }).then((client) => {
            client.sendText(`55${phone}@c.us`, `${message}`)
          });
      }
    } else {
      console.log("ERRO: ", phone, message)
    }
  }

  async chat (message) {
      if (!message.isGroupMsg) {
        if (message.body) {
          this.client.sendSeen(message.chatId);
          this.nlp.receiveMessage('pt' ,message.body).then((response) => {
            console.log('response NLP: ', response)
            if (response.intent === 'user.testing') {
              this.client.sendText(
                message.from,
                response.answer
              ).then((result) => {
                console.log(`## Mensagem ${response.answer} enviada para ${message.from} result ${JSON.stringify(result)}`)
              }).catch((e) => {
                console.log(e);
              });
            } else {
              this.client
                .reply(message.from, response.answer, message.id)
                .then((result) => {
                  console.log(`Mensagem ${response.answer} enviada para ${message.from} result ${JSON.stringify(result)}`)
                })
                .catch((erro) => {
                  console.error('Error when sending: ', erro); //return object error

                });
            }
          });
        }
      }
  }
}
