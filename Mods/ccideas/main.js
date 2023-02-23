"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const init_1 = __importDefault(require("./init"));
const save_1 = __importDefault(require("./save"));
const load_1 = __importDefault(require("./load"));
const CCIdeas = {
    init: init_1.default,
    save: save_1.default,
    load: load_1.default,
};
Game.registerMod(config_1.modName, CCIdeas);
//# sourceMappingURL=main.js.map