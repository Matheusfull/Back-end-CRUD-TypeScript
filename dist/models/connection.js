"use strict";
// ./models/connection.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise")); // instalar mysql2
exports.default = promise_1.default.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'books_api',
});
