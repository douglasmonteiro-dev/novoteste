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
exports.NlpService = void 0;
const common_1 = require("@nestjs/common");
const basic_1 = require("@nlpjs/basic");
const emoji_1 = require("@nlpjs/emoji");
let NlpService = class NlpService {
    constructor() {
        this.receiveMessage = async (lang, text) => {
            let response;
            response = await this.nlp.process(lang, (0, emoji_1.removeEmojis)(text));
            return response;
        };
        (0, basic_1.dockStart)({ use: ['Basic'] }).then((dock) => {
            const nlp = dock.get('nlp');
            nlp.addCorpus('src/nlp/corpus-en.json');
            nlp.addCorpus('src/nlp/corpus-pt.json');
            nlp.train();
            this.nlp = nlp;
        });
    }
};
NlpService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], NlpService);
exports.NlpService = NlpService;
//# sourceMappingURL=nlp.service.js.map