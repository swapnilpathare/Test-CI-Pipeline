"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const httpTrigger = function (context, req) {
    return __awaiter(this, void 0, void 0, function* () {
        let firstText = req.body.firstText;
        let secondText = req.body.secondText;
        let compare = (firstText === secondText) ? 'Strings are Same' : 'Comparision Failed';
        if (firstText && secondText) {
            context.res = {
                status: 200,
                body: compare
            };
        }
        else {
            context.res = {
                status: 400,
                body: "Please pass required parameters in the request body"
            };
        }
    });
};
exports.default = httpTrigger;
//# sourceMappingURL=index.js.map