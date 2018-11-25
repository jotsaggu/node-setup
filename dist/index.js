"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const mockData_1 = __importDefault(require("./mockData"));
const app = express_1.default();
app.use(cors_1.default());
app.use(helmet_1.default());
const jsonParser = body_parser_1.default.json();
const urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
app.get('/eth/test/tx/:txHash', jsonParser, (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.info('REQ DATA: ', req.params);
    res.send(mockData_1.default);
}));
app.listen(8045);
//# sourceMappingURL=index.js.map