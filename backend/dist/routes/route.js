"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const landingRoute_1 = __importDefault(require("./landingRoute"));
const route = express_1.default.Router();
route.use('/', landingRoute_1.default);
exports.default = route;
