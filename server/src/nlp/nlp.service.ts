import { Injectable } from '@nestjs/common';
import { dockStart } from '@nlpjs/basic';
import { removeEmojis } from '@nlpjs/emoji';
import {  Nlp} from '@nlpjs/nlp'
// import { NluNeural, DomainManager } from '@nlpjs/nlu'
// import { LangPt } from '@nlpjs/lang-pt'
// import { dockStart } from '@nlpjs/core'
@Injectable()
export class NlpService {
  nlp: Nlp
  // context: Context = new Context( )
  // contextManager: ContextManager = new ContextManager( )
  // nluNeural: NluNeural = new NluNeural()
  
  constructor() {
    dockStart({ use: ['Basic'] }).then((dock) => {
      const nlp = dock.get('nlp');
      nlp.addCorpus('src/nlp/corpus-en.json')
      nlp.addCorpus('src/nlp/corpus-pt.json')
      nlp.train();
      this.nlp = nlp
    });

  }

 
  receiveMessage = async (lang: string, text: string) => {
    let response: any
    response = await this.nlp.process(lang, removeEmojis(text));
    return response;
  }

}
